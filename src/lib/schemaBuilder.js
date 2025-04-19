import { z } from 'zod';

function withOptionalSupport(builderFn) {
    return function (t) {
        let schema = builderFn(t);
        let isOptional = false;

        const wrapper = {
            optional() {
                isOptional = true;
                return this;
            },
            build() {
                return isOptional ? schema.build().optional() : schema.build();
            },
        };

        return Object.assign(wrapper, schema);
    };
}

// === STRING FIELD BUILDER ===
function stringField(t) {
    let schema = z.string();
    const regexRules = [];

    return {
        required() {
            schema = schema.min(1, { message: t('required') });
            return this;
        },
        email() {
            schema = schema.email({ message: t('email') });
            return this;
        },
        min(length) {
            schema = schema.min(length, { message: t('min', { length }) });
            return this;
        },
        max(length) {
            schema = schema.max(length, { message: t('max', { length }) });
            return this;
        },
        regex(pattern, messageKey, params = {}) {
            const msg = t(messageKey, params);
            schema = schema.regex(pattern, { message: msg });
            return this;
        },
        build() {
            return schema;
        },
    };
}

// === NUMBER FIELD BUILDER ===
function numberField(t) {
    let schema = z.number();

    return {
        required() {
            schema = schema.refine(val => val !== undefined && val !== null, {
                message: t('required'),
            });
            return this;
        },
        min(value) {
            schema = schema.min(value, { message: t('min', { length: value }) });
            return this;
        },
        max(value) {
            schema = schema.max(value, { message: t('max', { length: value }) });
            return this;
        },
        positive() {
            schema = schema.positive({ message: t('positive') });
            return this;
        },
        int() {
            schema = schema.int({ message: t('integer') });
            return this;
        },
        build() {
            return schema;
        },
    };
}

// === BOOLEAN FIELD BUILDER ===
function booleanField(t) {
    let schema = z.boolean();

    return {
        required() {
            schema = schema.refine(val => val === true, {
                message: t('required'),
            });
            return this;
        },
        build() {
            return schema;
        },
    };
}

// === MAIN SCHEMA BUILDER ===
export const schemaBuilder = (buildFn) => {
    return function (t) {
        // Passing t correctly to field builders
        const fields = buildFn({
            string: () => withOptionalSupport(stringField)(t),
            number: () => withOptionalSupport(numberField)(t),
            boolean: () => withOptionalSupport(booleanField)(t),
        });

        const result = {};
        for (const key in fields) {
            result[key] = fields[key].build();
        }

        return z.object(result);
    };
};

