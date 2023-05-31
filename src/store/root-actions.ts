import { cartSlice } from './slices/cartSlice'
import * as userActions from './user/user.actions'

export const rootActions = {
	...userActions,
	...cartSlice.actions
}
