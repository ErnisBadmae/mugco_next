import { FC } from 'react'

import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import { TypePaginationProducts } from '../../../types/product.interface'
import Catalog from '../../ui/catalog/Catalog'
import Meta from '../../ui/meta/Meta'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<Meta title='Home'>
			{!!user && <button onClick={() => logout()}>Logout</button>}
			<Catalog title='Freshed products' products={products || []} />
		</Meta>
	)
}

export default Home
