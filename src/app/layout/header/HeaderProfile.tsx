'use client'

import Image from 'next/image'
import { FC } from 'react'

import { useOutside } from '../../../hooks/useOutside'
import { useProfile } from '../../../hooks/useProfile'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()

	const { isShow, ref, setIsShow } = useOutside(false)

	if (!profile?.avatarPath) return null

	return (
		<div className='relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					width={43}
					height={43}
					src={profile?.avatarPath}
					alt='profile'
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			</button>
			{isShow && (
				
			)}
		</div>
	)
}

export default HeaderProfile
