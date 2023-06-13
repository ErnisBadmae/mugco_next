import type { Metadata } from 'next'

import { ProductService } from '../services/product/product.service'

import Home from './Home'

export const metadata: Metadata = {
	description: 'Handmade ceramics for the gifts'
}

export const revalidate = 60

async function getProducts() {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 4,
		rating: ''
	})

	return data
}

export default async function HomePage() {
	const data = await getProducts()
	return <Home products={data.products} length={data.length} />
}
