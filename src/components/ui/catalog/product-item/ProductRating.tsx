'use client'

import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '../../../../types/product.interface'

interface IProductRating {
	product: IProduct
	isText?: boolean
}

const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
	const [rating, _] = useState<number>(
		product.reviews.length > 0
			? Math.round(
					product.reviews.reduce((acc, review) => acc + review.rating, 0) /
						product.reviews.length
			  )
			: 0
	)

	return (
		<div className='mb-2'>
			{!!product.reviews.length && (
				<span className='mr-1'>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{ display: 'inline-block' }}
						size={20}
						allowFraction
						transition
					/>
					<span className='text-sm ml-1' style={{ color: '#FFBC0D' }}>
						{rating}
					</span>
				</span>
			)}
			{isText && (
				<span className='text-sm'>{product.reviews.length} reviews</span>
			)}
		</div>
	)
}

export default ProductRating
