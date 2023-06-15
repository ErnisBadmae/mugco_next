import Image from 'next/image'
import { FC } from 'react'

import { ICartItem } from '../../../../../../types/cart.interface'
import { convertPrice } from '../../../../../../utils/convertPrice'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.description}
			/>
			<div>
				{item.product.name}
				{convertPrice(item.product.price)}

				<CartActions item={item} />
			</div>
		</div>
	)
}
