import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICartItem } from '../../types/cart.interface'

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
				(item: any) => item.product.id !== action.payload
			)
		}
	}
})
