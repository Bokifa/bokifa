export const config = {
    app: {
        env: process.env.APP_ENV,
        url: process.env.APP_URL,
        domain: process.env.APP_DOMAIN,
    },
    server: {
        url: process.env.SERVER_URL,
        domain: process.env.SERVER_DOMAIN,
        protocol: process.env.SERVER_PROTOCOL,
    },
    isDev: process.env.APP_ENV === 'development',
};
