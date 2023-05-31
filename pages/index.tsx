import { GetStaticProps, NextPage } from 'next'

import Home from '../src/components/screens/home/Home'
import { ProductService } from '../src/services/product/product.service'
import { TypeProducts } from '../src/types/product.interface'

const HomePage: NextPage<TypeProducts> = ({ products }) => {
	return <Home products={products} />
}

export const getStaticProps: GetStaticProps<TypeProducts> = async () => {
	const { data: products } = await ProductService.getAll({
		page: 1,
		perPage: 4
	})

	return {
		props: {
			products
		}
	}
}

export default HomePage
