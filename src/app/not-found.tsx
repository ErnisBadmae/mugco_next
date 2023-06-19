import Link from 'next/link'

import Heading from '../components/ui/heading/Heading'

import Layout from './layout/Layout'

export default function NotFound() {
	return (
		<Layout>
			<Heading>Not found</Heading>
			<p>Could not find requested resource</p>
			<p>
				View{''}
				<Link href='/explorer' className='text-primary'>
					all products
				</Link>
			</p>
		</Layout>
	)
}
