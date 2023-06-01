import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC } from 'react'

import { IProduct } from '../../../../types/product.interface'

import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
	ssr: false
})

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div>
				<DynamicFavoriteButton productId={product.id} />
				<AddToCartButton product={product} />

				<Image
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
				/>
			</div>
			<h3 className='mb-1'>{product?.name}</h3>
			<div className='text-aqua text-sm mb-2'>{product?.category?.name}</div>
			<ProductRating product={product} />
			<div>{product.price}</div>
		</div>
	)
}

export default ProductItem
