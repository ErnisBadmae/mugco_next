import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { getSiteUrl } from '../config/url.config'
import { SITE_NAME } from '../constants/app.constants'
import Providers from '../providers/Providers'

import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'
import '@/assets/styles/globals.scss'

import { Golos_Text } from 'next/font/google'

const golos = Golos_Text({
	weight: '400',
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export const metadata: Metadata = {
	icons: {
		// icon: '/favicon.png'
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
		<html lang='en' className={golos.variable}>
			<body>
				<Providers>
					<div className='bg-secondary'>
						<Header />
						<div
							className='grid'
							style={{
								gridTemplateColumns: '.7fr 4fr'
							}}
						>
							<Sidebar />
							<main className='rounded-tl-lg bg-bg-color p-12 pb-52'>
								{children}
							</main>
						</div>
					</div>
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
