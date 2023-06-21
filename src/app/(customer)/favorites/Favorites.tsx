'use client'

import Catalog from '../../../components/ui/catalog/Catalog'
import { useProfile } from '../../../hooks/useProfile'

export default function () {
	const { profile } = useProfile()

	return <Catalog products={profile?.favorites || []} title='Favorites' />
}
