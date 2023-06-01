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
			{title && <Heading>{title}</Heading>}
			{products.length ? (
				products.map(product => (
					<ProductItem product={product} key={product.id} />
				))
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
