'use client'

import { FC } from 'react'

import CatalogPagination from '../components/ui/catalog/CatalogPagination'
import Layout from '../components/ui/layout/Layout'
import { useActions } from '../hooks/useActions'
import { useAuth } from '../hooks/useAuth'
import { TypePaginationProducts } from '../types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<Layout>
			{!!user && <button onClick={() => logout()}>Logout</button>}
			<CatalogPagination title='Freshed products' data={{ products, length }} />
		</Layout>
	)
}

export default Home
