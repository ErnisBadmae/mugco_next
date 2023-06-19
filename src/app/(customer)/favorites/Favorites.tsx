'use client'

import Catalog from '../../../components/ui/catalog/Catalog'
import { useProfile } from '../../../hooks/useProfile'
import Layout from '../../layout/Layout'

export default function () {
	const { profile } = useProfile()

	return (
		<Layout>
			<Catalog products={profile?.favorites || []} title='Favorites' />
		</Layout>
	)
}
