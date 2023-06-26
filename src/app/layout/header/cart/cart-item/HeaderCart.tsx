'use client'

import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import Button from '../../../../../components/ui/button/Button'
import SquareButton from '../../../../../components/ui/button/SquareButton'
import { useActions } from '../../../../../hooks/useActions'
import { useCart } from '../../../../../hooks/useCart'
import { useOutside } from '../../../../../hooks/useOutside'
import { OrderService } from '../../../../../services/order/order.service'
import { ICartItem } from '../../../../../types/cart.interface'
import { convertPrice } from '../../../../../utils/convertPrice'

import styles from './Cart.module.scss'
import CartItem from './CartItem'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	// const {} = useActions
	// const { push } = useRouter()
	// const { mutate } = useMutation(
	// 	['create order and payment'],
	// 	() =>
	// 		OrderService.place({
	// 			items: items.map(item => ({
	// 				price: item.price,
	// 				quantity: item.quantity,
	// 				productId: item.product.id
	// 			}))
	// 		}),
	// 	{
	// 		onSuccess({ data }) {
	// 			push(data.confirmation.confirmation_url)
	// 			reset()
	// 		}
	// 	}
	// )

	return (
		<div className='relative' ref={ref}>
			<div>
				<SquareButton
					Icon={RiShoppingCartLine}
					onClick={() => setIsShow(!isShow)}
					number={items.length}
				/>

				{isShow && (
					<div className={styles.cartWrapper}>
						<div className='font-normal text-lg mb-5'>My cart</div>

						<div>
							{items.length ? (
								items.map((item: ICartItem) => (
									<CartItem item={item} key={item.id} />
								))
							) : (
								<div className='font-light'> Cart is empty!</div>
							)}
						</div>

						<div>
							<div>Total: {convertPrice(total)}</div>
						</div>
						{!!items.length && (
							<div className='text-center mt-7 mb-5'>
								<Link className='btn btn-white' href='/checkout'>
									Go to checkout
								</Link>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
