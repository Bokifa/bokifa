export const z = {
    string: () => {
        const base = {
            type: 'string',
            check: (value) => typeof value === 'string',
            minLen: null,
            maxLen: null,

            min(n) {
                this.minLen = n;
                return this;
            },

            max(n) {
                this.maxLen = n;
                return this;
            },

            parse(value) {
                if (!this.check(value)) throw new Error(`Expected string, got ${typeof value}`);
                if (this.minLen !== null && value.length < this.minLen)
                    throw new Error(`String must be at least ${this.minLen} characters`);
                if (this.maxLen !== null && value.length > this.maxLen)
                    throw new Error(`String must be at most ${this.maxLen} characters`);
                return value;
            },
        };

        return wrapWithModifiers(base);
    },

    number: () => {
        const base = {
            type: 'number',
            minVal: null,
            maxVal: null,
            check: (value) => typeof value === 'number',
            min(n) {
                this.minVal = n;
                return this;
            },
            max(n) {
                this.maxVal = n;
                return this;
            },
            parse(value) {
                if (!this.check(value)) throw new Error(`Expected number, got ${typeof value}`);
                if (this.minVal !== null && value < this.minVal) throw new Error(`Number must be >= ${this.minVal}`);
                if (this.maxVal !== null && value > this.maxVal) throw new Error(`Number must be <= ${this.maxVal}`);
                return value;
            },
        };
        return wrapWithModifiers(base);
    },

    boolean: () =>
        wrapWithModifiers({
            type: 'boolean',
            check: (value) => typeof value === 'boolean',
            parse(value) {
                if (!this.check(value)) throw new Error(`Expected boolean, got ${typeof value}`);
                return value;
            },
        }),

    enum: (values) =>
        wrapWithModifiers({
            type: 'enum',
            values,
            parse(value) {
                if (!values.includes(value)) throw new Error(`Expected one of ${values.join(', ')}`);
                return value;
            },
        }),

    array: (itemSchema) =>
        wrapWithModifiers({
            type: 'array',
            itemSchema,
            parse(value) {
                if (!Array.isArray(value)) throw new Error(`Expected array`);
                return value.map((v, i) => {
                    try {
                        return itemSchema.parse(v);
                    } catch (e) {
                        throw new Error(`Invalid item at index ${i}: ${e.message}`);
                    }
                });
            },
        }),

    union: (schemas) =>
        wrapWithModifiers({
            type: 'union',
            schemas,
            parse(value) {
                const errors = [];
                for (const schema of schemas) {
                    try {
                        return schema.parse(value);
                    } catch (err) {
                        errors.push(err.message);
                    }
                }
                throw new Error(`Value doesn't match any union types: ${errors.join('; ')}`);
            },
        }),

    object: (shape) => {
        const base = {
            type: 'object',
            shape,
            parse(obj) {
                if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
                    throw new Error(`Expected object`);
                }

                const result = {};
                for (const key in shape) {
                    const field = shape[key];
                    const hasValue = key in obj;
                    const value = obj[key];

                    if (!hasValue && field._isRequired) {
                        throw new Error(`Missing required field "${key}"`);
                    }

                    if (hasValue) {
                        try {
                            result[key] = field.parse(value);
                        } catch (err) {
                            throw new Error(`Invalid field "${key}": ${err.message}`);
                        }
                    }
                }

                return result;
            },
        };

        return {
            ...wrapWithModifiers(base),
            safeParse(value) {
                try {
                    return { success: true, data: base.parse(value) };
                } catch (err) {
                    return { success: false, error: err.message };
                }
            },
        };
    },
};

function wrapWithModifiers(base) {
    base._isRequired = true;

    base.optional = function () {
        this._isRequired = false;
        const originalParse = this.parse.bind(this);
        this.parse = function (value) {
            if (value === undefined || value === null) return undefined;
            return originalParse(value);
        };
        return this;
    };

    base.required = function () {
        this._isRequired = true;
        return this;
    };

    base.safeParse = function (value) {
        try {
            return { success: true, data: this.parse(value) };
        } catch (e) {
            return { success: false, error: e.message };
        }
    };

    return base;
}
