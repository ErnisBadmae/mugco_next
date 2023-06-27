'use client'

import Link from 'next/link'

import { FC, PropsWithChildren } from 'react'
import { RiLogoutCircleFill } from 'react-icons/ri'

import Loader from '../../../components/ui/loader/Loader'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'

import { useIsAdminPanel } from '../../../hooks/useIsAdminPanel'
import { useCategories } from '../../../hooks/qureies/useCategories'
import { ADMIN_MENU } from './admin.menu'
import { convertToMenuItems } from './conver-to-menu-items'

const Sidebar: FC<PropsWithChildren<unknown>> = () => {
	const { user } = useAuth()
	const { logout } = useActions()
	const { data, isLoading } = useCategories()

	const { isAdminPanel, pathname } = useIsAdminPanel()

	return (
		<aside
			className='z-10 flex flex-col justify-between bg-secondary'
			style={{
				height: 'calc(100vh - 91px)',
				minHeight: 'calc(100% - 91px)'
			}}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='mb-6 ml-6 mt-4 text-xl text-white'>
							{isAdminPanel ? 'Menu: ' : 'Categories: '}
						</div>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
								item => (
									<li key={item.href}>
										<Link href={item.href}>
											<a
												className={
													pathname === `/category/${item.href}`
														? 'text-primary'
														: 'text-white'
												}
											>
												{item.label}
											</a>
										</Link>
									</li>
								)
							)}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}
			</div>

			{!!user && (
				<button
					className='mb-10 ml-10 flex items-center text-white'
					onClick={() => logout()}
				>
					<RiLogoutCircleFill />
					<span className='ml-2'>Logout</span>
				</button>
			)}
		</aside>
	)
}

export default Sidebar
