import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { getSiteUrl } from '../config/url.config'
import { SITE_NAME } from '../constants/app.constants'
import Providers from '../providers/Providers'

import '@/assets/styles/globals.scss'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.png'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['e.badmaev@gmail.com']
	}
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en'>
			<body>
				<Providers>{children}</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
