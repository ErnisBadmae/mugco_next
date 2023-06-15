'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { RiLogoutCircleFill } from 'react-icons/ri'

import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import { CategoryService } from '../../../../services/category/category.service'
import Loader from '../../loader/Loader'

const Sidebar: FC<PropsWithChildren<unknown>> = () => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const { asPath } = useRouter()
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<aside
			className='flex flex-col justify-between bg-secondary'
			style={{
				height: 'calc(100vh - 91px)'
			}}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xl text-white mt-4 mb-6 ml-6'>Categories:</div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link href={`/category/${category.slug}`}>
										<a
											className={
												asPath === `/category/${category.slug}`
													? 'text-primary'
													: 'text-white'
											}
										>
											{category.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}
			</div>

			{!!user && (
				<button
					className='text-white flex items-center ml-10 mb-10'
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
