import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
	IAddToCartPayload,
	ICartInitialState,
	IChangeQuantityPayload
} from '../slices/cart.types'

const initialState: ICartInitialState = {
	items: []
}
export const cartSlices = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const isExist = state.items.some(
				item => item.product.id === action.payload.product.id
			)
			if (isExist) {
				state.items.push({ ...action.payload, id: state.items.length })
			}
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(
				(item: { id: number }) => item.id !== action.payload.id
			)
		},

		changeQuantity: (
			state: { items: any[] },
			action: PayloadAction<IChangeQuantityPayload>
		) => {
			const { id, type } = action.payload
			const item = state.items.find((item: { id: number }) => item.id === id)
			if (item) type === 'plus' ? item.quantity++ : item.quantity--
		},
		reset: state => {
			state.items = []
		}
	}
})
