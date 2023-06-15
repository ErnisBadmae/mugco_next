import Catalog from '../src/components/ui/catalog/Catalog'
import Layout from '../src/components/ui/layout/Layout'
import { useProfile } from '../src/hooks/useProfile'

const FavoritesPage = () => {
	const { profile } = useProfile()

	return (
		<Layout>
			<Catalog products={profile?.favorites || []} title='Favorites' />
		</Layout>
	)
}
FavoritesPage.isOnlyUser = true
export default FavoritesPage
