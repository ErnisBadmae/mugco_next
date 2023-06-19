import type { Metadata } from 'next'

import Heading from '../../components/ui/heading/Heading'
import { NO_INDEX_PAGE } from '../../constants/app.constants'
import Layout from '../layout/Layout'

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
