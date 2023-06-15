import { FC } from 'react'
import { AiFillMinusCircle } from 'react-icons/ai'

import { useActions } from '../../../../../../hooks/useActions'
import { useCart } from '../../../../../../hooks/useCart'
import { ICartItem } from '../../../../../../types/cart.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem === item.id)?.quantity

	return (
		<div className='mt-3'>
			<div className='flex items-center gap-3'>
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<AiFillMinusCircle fontSize={13} />
				</button>
			</div>
		</div>
	)
}

export default CartActions
