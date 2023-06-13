import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '../../constants/app.constants'

export const metadata: Metadata = {
	title: 'Favorites',
	...NO_INDEX_PAGE
}

export default function FavoritesPage() {
	return <FavoritesPage />
}
