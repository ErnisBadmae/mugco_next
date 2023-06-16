import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '../../../constants/app.constants'

import MyOrders from './MyOrders'

export const metadata: Metadata = {
	title: 'My orders',
	...NO_INDEX_PAGE
}

export default function MyOrdersPage() {
	return <MyOrders />
}
