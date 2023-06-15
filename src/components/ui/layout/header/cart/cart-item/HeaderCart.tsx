import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import { useCart } from '../../../../../../hooks/useCart'
import { useOutside } from '../../../../../../hooks/useOutside'
import SquareButton from '../../../../button/SquareButton'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	const { push } = useRouter()

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
          items.map(item => <CartItem item= {item} key= {item.id} />) 
            : (
            <div className='font-light'> Cart is empty!</div>)
            }
          
        )}
      </div>
		</div>
	)
}
