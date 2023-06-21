'use client'

import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
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

import CartItem from './CartItem'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	const {} = useActions
	const { push } = useRouter()
	const { mutate } = useMutation(
		['create order and payment'],
		() =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			}),
		{
			onSuccess({ data }) {
				push(data.confirmation.confirmation_url)
				reset()
			}
		}
	)

	return (
		<div className='relative' ref={ref}>
			<div>
				<SquareButton
					Icon={RiShoppingCartLine}
					onClick={() => setIsShow(!isShow)}
					number={items.length}
				/>
				<div
					className={cn(
						'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
						isShow ? 'open-menu' : 'close-menu'
					)}
				>
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
					<div className='text-center'>
						<Button variant='white' size='sma' className='btn-link mt-5 mb-2'>
							Place order
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
