import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Catalog from '../src/components/ui/catalog/Catalog'
import CatalogPagination from '../src/components/ui/catalog/CatalogPagination'
import Layout from '../src/components/ui/layout/Layout'
import { ProductService } from '../src/services/product/product.service'

const SearchPage: NextPage = () => {
	const { query } = useRouter()

	const { data } = useQuery(['search products', query.term], () =>
		ProductService.getAll({
			searchTerm: query.term as string
		})
	)

	return (
		<Layout>
			<Catalog
				products={data?.products || []}
				title={`Поиск по запросу "${query.term || ''}"`}
			/>
		</Layout>
	)
}

export default SearchPage
