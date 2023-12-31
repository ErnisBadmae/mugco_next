/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	images: {
		domains: ['loremflickr.com', 'picsum.photos', 'cloudflare-ipfs.com']
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
