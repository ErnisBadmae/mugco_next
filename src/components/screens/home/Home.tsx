import { FC, PropsWithChildren } from 'react'

import Heading from '../../ui/heading/Heading'
import Meta from '../../ui/meta/Meta'

const Home: FC<PropsWithChildren<unknown>> = () => {
	return (
		<Meta title='Home'>
			<Heading>Hello world</Heading>
		</Meta>
	)
}

export default Home
