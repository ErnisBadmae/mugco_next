import { FC } from 'react'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

import { useActions } from '../../../../hooks/useActions'
import { useCart } from '../../../../hooks/useCart'
import { ICartItem } from '../../../../types/cart.interface'
import { IProduct } from '../../../../types/product.interface'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	console.log('product', product)
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	console.log('items', items)

	const currentElement = items.find((cartItem: ICartItem) => {
		console.log('cartItem', cartItem.product.id)
		cartItem.product.id === product.id
	})
	// console.log('currentElement', currentElement)
	return (
		<div>
			<button
				className='text-secondary'
				onClick={() =>
					currentElement
						? removeFromCart(currentElement.id)
						: addToCart(
								JSON.stringify({
									product,
									quantity: 1,
									price: product.price
								})
						  )
				}
			>
				{currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
			</button>
		</div>
	)
}

export default AddToCartButton
