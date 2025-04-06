import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
	'./src/features/language/services/lang-on-req.service.js'
);

/** @type {import('next').NextConfig} */
const nextConfig = {

	eslint: {
		ignoreDuringBuilds: true,
	}
};

export default withNextIntl(nextConfig);
