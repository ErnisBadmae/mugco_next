import { FC } from 'react'

import { IProduct } from '../../../types/product.interface'
import Heading from '../heading/Heading'
import Loader from '../loader/Loader'

import ProductItem from './product-item/ProductItem'

interface ICatalogProps {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalogProps> = props => {
	const { products, isLoading, title } = props

	if (isLoading) return <Loader />
	return (
		<section>
			{title && <Heading className='mb-2'>{title}</Heading>}
			{products.length ? (
				<div className='grid grid-cols-4 gap-10 p-12'>
					{products.map(product => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
