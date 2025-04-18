

export async function api(url, { method = 'GET', data, accessToken, headers = {}, ...rest } = {}) {
    const isServer = typeof window === 'undefined';

    const isFormData = typeof FormData !== 'undefined' && data instanceof FormData;

    const defaultHeaders = {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...headers,
        ...(!isFormData && { 'Content-Type': 'application/json' }),
    };

    const options = {
        method,
        headers: defaultHeaders,
        ...rest,
    };

    if (data) {
        options.body = isFormData ? data : JSON.stringify(data);
    }

    try {
        const res = await fetch(url, options);

        let responseData;
        const contentType = res.headers.get('content-type');

        if (contentType?.includes('application/json')) {
            responseData = await res.json();
        } else {
            responseData = await res.text();
        }

        if (!res.ok) {
            const error = new Error('API Error');
            error.status = res.status;
            error.data = responseData;

            if (res.status === 400 && responseData?.errors) {
                error.validationErrors = responseData.errors;
            }

            throw error;
        }

        return responseData;
    } catch (err) {
        console.error('API Fetch Error:', err);
        throw err;
    }
}
