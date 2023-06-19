'use client'

import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import { ProductService } from '../../../services/product/product.service'
import {
	EnumProductSort,
	TypePaginationProducts
} from '../../../types/product.interface'
import Button from '../button/Button'
import Heading from '../heading/Heading'
import Loader from '../loader/Loader'

import ProductItem from './product-item/ProductItem'
import SortDropDown from './product-item/SortDropDown'

interface ICatalogPaginationProps {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPaginationProps> = props => {
	const { data, title } = props

	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		{
			initialData: data,
			keepPreviousData: true
		}
	)

	if (isLoading) return <Loader />

	return (
		<div>
			<section>
				{title && <Heading className='mb-2'>{title}</Heading>}
				<SortDropDown sortType={sortType} setSortype={setSortType} />
				{response.products.length ? (
					<>
						<div className='grid grid-cols-4 gap-10 p-12'>
							{response.products.map(product => (
								<ProductItem product={product} key={product.id} />
							))}
						</div>
						<div className='text-center mt-16'>
							{Array.from({ length: response.length / 4 }).map((_, index) => {
								const pageNumber = index + 1
								return (
									<Button
										variant={page === pageNumber ? 'orange' : 'white'}
										size='sma'
										className='mx-3'
										onClick={() => setPage(pageNumber)}
										key={pageNumber}
									>
										{pageNumber}
									</Button>
								)
							})}
						</div>
					</>
				) : (
					<div>There are no products</div>
				)}
			</section>
		</div>
	)
}

export default CatalogPagination
