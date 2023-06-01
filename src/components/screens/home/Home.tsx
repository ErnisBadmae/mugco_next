import { FC } from 'react'

import { TypePaginationProducts } from '../../../types/product.interface'
import Catalog from '../../ui/catalog/Catalog'
import Heading from '../../ui/heading/Heading'
import Meta from '../../ui/meta/Meta'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Heading>Hello world</Heading>
			<Catalog products={products} />
		</Meta>
	)
}

export default Home
