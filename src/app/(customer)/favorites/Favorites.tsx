'use client'

import Catalog from '../../../components/ui/catalog/Catalog'
import Layout from '../../../components/ui/layout/Layout'
import { useProfile } from '../../../hooks/useProfile'

export default function () {
	const { profile } = useProfile()

	return (
		<Layout>
			<Catalog products={profile?.favorites || []} title='Favorites' />
		</Layout>
	)
}
