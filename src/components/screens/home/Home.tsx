import { FC } from 'react'

import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import { TypePaginationProducts } from '../../../types/product.interface'
import CatalogPagination from '../../ui/catalog/CatalogPagination'
import Layout from '../../ui/layout/Layout'
import Meta from '../../ui/meta/Meta'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<Layout>
			<Meta title='Home'>
				{!!user && <button onClick={() => logout()}>Logout</button>}
				<CatalogPagination
					title='Freshed products'
					data={{ products, length }}
				/>
			</Meta>
		</Layout>
	)
}

export default Home
