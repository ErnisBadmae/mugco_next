import { FC } from 'react'

import Catalog from '../components/ui/catalog/Catalog'
import { TypePaginationProducts } from '../types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return <Catalog title='Freshed products' products={products} />
}

export default Home
