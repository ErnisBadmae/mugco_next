import { FC } from 'react'

import { IProduct } from '../../../types/product.interface'

import ProductItem from './product-item/ProductItem'

const Catalog: FC<{ products: IProduct[]; title: string }> = ({
	products,
	title
}) => {
	return (
		<section>
			{title}
			{products.length ? (
				products.map((product: IProduct) => (
					<ProductItem product={product} key={product.id} />
				))
			) : (
				<div>Thera are no products</div>
			)}
		</section>
	)
}

export default Catalog
