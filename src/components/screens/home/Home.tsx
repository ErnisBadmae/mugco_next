import { FC, PropsWithChildren } from 'react'

import { TypeProducts } from '../../../types/product.interface'
import Catalog from '../../ui/catalog/Catalog'
import Heading from '../../ui/heading/Heading'
import Meta from '../../ui/meta/Meta'

const Home: FC<TypeProducts> = ({ products }) => {
	return (
		<Meta title='Home'>
			<Heading>Hello world</Heading>
			<Catalog products={products} />
		</Meta>
	)
}

export default Home
