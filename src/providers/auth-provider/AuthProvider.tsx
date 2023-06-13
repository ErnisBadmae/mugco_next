'use client'

import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

import { REFRESH_TOKEN } from '../../constants/token.constants'
import { useActions } from '../../hooks/useActions'
import { useAuth } from '../../hooks/useAuth'
import { getAccessToken } from '../../services/auth/auth.helper'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const pathname = usePathname()

	useEffect(() => {
		const accessToken = getAccessToken()

		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get(REFRESH_TOKEN)
		if (!refreshToken && user) logout()
	}, [pathname])

	return isOnlyUser ? (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}

export default AuthProvider
