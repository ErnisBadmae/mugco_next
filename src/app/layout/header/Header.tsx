import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/cart-item/HeaderCart'

const Header: FC<PropsWithChildren<unknown>> = () => {
	return (
		<header
			className='bg-secondary w-full'
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href='/'>
				<Image priority width={180} height={37} src='' alt='' />
			</Link>

			<Search />
			<div className='flex items-center justify-end gap-10'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
