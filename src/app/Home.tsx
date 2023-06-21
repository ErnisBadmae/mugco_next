import { FC } from 'react'

import CatalogPagination from '../components/ui/catalog/CatalogPagination'
import { useActions } from '../hooks/useActions'
import { useAuth } from '../hooks/useAuth'
import { TypePaginationProducts } from '../types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<CatalogPagination title='Freshed products' data={{ products, length }} />
	)
}

export default Home
