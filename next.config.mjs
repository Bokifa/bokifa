import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
	'./src/features/language/services/lang-on-req.service.js'
);

/** @type {import('next').NextConfig} */
const nextConfig = {

	eslint: {
		ignoreDuringBuilds: true,
	},
	env: {
		APP_ENV: process.env.APP_ENV,
		APP_URL: process.env.APP_URL,
		APP_DOMAIN: process.env.APP_DOMAIN,
		SERVER_URL: process.env.SERVER_URL,
		SERVER_DOMAIN: process.env.SERVER_DOMAIN,
		SERVER_PROTOCOL: process.env.SERVER_PROTOCOL,
	},
};

export default withNextIntl(nextConfig);
