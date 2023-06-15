import CatalogPagination from '../src/components/ui/catalog/CatalogPagination'
import { useProfile } from '../src/hooks/useProfile'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()

	return (
		<Layout>
			<Catalog products={profile?.favorites || []} title='Favorites' />
		</Layout>
	)
}
FavoritesPage.isOnlyUser = true
export default FavoritesPage
