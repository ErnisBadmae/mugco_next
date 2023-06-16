import type { Metadata } from 'next'

import Heading from '../../components/ui/heading/Heading'
import Layout from '../../components/ui/layout/Layout'
import { NO_INDEX_PAGE } from '../../constants/app.constants'

export const metadata: Metadata = {
	title: 'Thanks',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<Layout>
			<Heading>Thanks!</Heading>
		</Layout>
	)
}
