

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
        // const contentType = res.headers.get('content-type');

        responseData = await res.json();
        // if (contentType?.includes('application/json')) {
        // } else {
        //     responseData = await res.text();
        // }

        if (!res.ok) {

            throw {
                validationErrors: responseData?.errors,
                status: res.status,
                statusText: res.statusText,
            };
        }

        return responseData;
    } catch (err) {
        console.error('API Fetch Error:', err);
        throw err;
    }
}
