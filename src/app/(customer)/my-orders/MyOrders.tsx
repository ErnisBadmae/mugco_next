'use client'

import { useQuery } from '@tanstack/react-query'

import Heading from '../../../components/ui/heading/Heading'
import Layout from '../../../components/ui/layout/Layout'
import { OrderService } from '../../../services/order/order.service'
import { convertPrice } from '../../../utils/convertPrice'

export default function MyOrders() {
	const { data: orders } = useQuery(
		['my orders'],
		() => OrderService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	return (
		<Layout>
			<Heading> My order</Heading>

			<section>
				{orders?.length ? (
					orders.map(order => (
						<div
							key={order.id}
							className='rounded-lg bg-white shadow flex gap-10 p-7 my-7'
						>
							<span>{order.id}</span>
							<span>{order.status}</span>
							<span>
								{new Date(order.createdAt).toLocaleDateString('ru-Ru')}
							</span>

							<span>{convertPrice(order.total)}</span>
						</div>
					))
				) : (
					<div>Order not</div>
				)}
			</section>
		</Layout>
	)
}
