import Link from 'next/link'

import Heading from '../components/ui/heading/Heading'

export default function NotFound() {
	return (
		<>
			<Heading>Not found</Heading>
			<p>Could not find requested resource</p>
			<p>
				View{''}
				<Link href='/explorer' className='text-primary'>
					all products
				</Link>
			</p>
		</>
	)
}
