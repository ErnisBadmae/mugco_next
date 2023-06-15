import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import { useCart } from '../../../../../../hooks/useCart'
import { useOutside } from '../../../../../../hooks/useOutside'
import { ICartItem } from '../../../../../../types/cart.interface'
import { convertPrice } from '../../../../../../utils/convertPrice'
import Button from '../../../../button/Button'
import SquareButton from '../../../../button/SquareButton'

import CartItem from './CartItem'

const HeaderCart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	return (
		<div>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => setIsShow(!isShow)}
				number={items.length}
			/>

			<div className='font-normal text-lg mb-5'>My cart</div>

			<div>
				{items.length ? (
					items.map((item: ICartItem) => <CartItem item={item} key={item.id} />)
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
	)
}

export default HeaderCart
