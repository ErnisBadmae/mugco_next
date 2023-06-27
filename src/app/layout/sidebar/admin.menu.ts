import { getAdminUrl } from '../../../config/url.config'
import { IMenuItem } from './menu.interface'

export const ADMIN_MENU: IMenuItem[] = [
	{
		label: 'Dashboard',
		href: getAdminUrl('/')
	},
	{
		label: 'Products',
		href: getAdminUrl('/products')
	},
	{
		label: 'Categories',
		href: getAdminUrl('/categories')
	},
	{
		label: 'Products',
		href: getAdminUrl('/reviews')
	},
	{
		label: 'Products',
		href: getAdminUrl('/orders')
	}
]
