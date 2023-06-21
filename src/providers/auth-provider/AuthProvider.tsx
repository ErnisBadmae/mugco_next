import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

import NotFound from '../../app/not-found'
import { ADMIN_PANEL_URL } from '../../config/url.config'
import { REFRESH_TOKEN } from '../../constants/token.constants'
import { useActions } from '../../hooks/useActions'
import { useAuth } from '../../hooks/useAuth'
import { getAccessToken } from '../../services/auth/auth.helper'

import { protectedRoutes } from './protected-routes.data'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()
	const router = useRouter()

	const { checkAuth, logout } = useActions()
	const { user } = useAuth()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get(REFRESH_TOKEN)
		if (!refreshToken && user) logout()
	}, [pathname])

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname?.startsWith(route)
	)

	const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

	//общий для всех

	const getUserStatus = (): string => {
		if (!isProtectedRoute && !isAdminRoute) return 'GENERAL'
		if (user?.isAdmin) return 'ADMIN'
		if (user && isProtectedRoute) return 'PROTECTED'
		if (user && isAdminRoute) return 'NOT_FOUND'
		if (pathname !== '/auth') return 'AUTH'
		return 'UNKNOWN'
	}

	switch (getUserStatus()) {
		case 'GENERAL':
		case 'ADMIN':
		case 'PROTECTED':
			return <>{children}</>
		case 'NOT_FOUND':
			return (
				<>
					<NotFound />
				</>
			)
		case 'AUTH':
			router.replace('/auth')
		default:
			return null
	}
}

export default AuthProvider
