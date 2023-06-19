import type { Metadata } from 'next'

import Catalog from '../../../components/ui/catalog/Catalog'
import Layout from '../../../components/ui/layout/Layout'
import { CategoryService } from '../../../services/category/category.service'
import { ProductService } from '../../../services/product/product.service'
import { IPageSlugParam, TypeParamSlug } from '../../../types/page-params'

export const revalidate = 60

export async function generateMetadata({
	params
}: IPageSlugParam): Promise<Metadata> {
	const { category, products } = await getProducts(params)

	return {
		title: category.name,
		description: `Random description about ${category.name}`,
		openGraph: {
			images: products[0].images,
			description: `Random description about ${category.name}`
		}
	}
}

export async function generateStaticParams() {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug }
		}
	})

	return paths
}

async function getProducts(params: TypeParamSlug) {
	const { data: products } = await ProductService.getByCategory(
		params?.slug as string
	)

	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string
	)

	return {
		products,
		category
	}
}

export default async function CategoryPage({ params }: IPageSlugParam) {
	const data = await getProducts(params)
	return (
		<Layout>
			<Catalog products={data.products || []} title={data.category.name} />
		</Layout>
	)
}
