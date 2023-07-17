import { FC } from 'react'

import Catalog from '../components/ui/catalog/Catalog'
import { TypePaginationProducts } from '../types/product.interface'
import Carousel from '../components/carousel/Carousel'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return <>
	<Carousel items={} className='mb-10'/>
	<Catalog title='Freshed products' products={products} />
	</>
}

export default Home
