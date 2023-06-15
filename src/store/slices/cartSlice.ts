import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICartItem } from '../../types/cart.interface'

interface IChangeQuantityPayload {
	id: number
	quantity: number
}

const initialState: any = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItem>) => {
			state.items = [...state.items, action.payload]
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				(item: ICartItem) => item.product.id !== action.payload
			)
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			const item = state.items.find(
				(item: ICartItem) => item.product.id === action.payload.id
			)

			if (item) {
				item.quantity = action.payload.quantity
			}
		}
	}
})
