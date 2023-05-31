import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
	rating: Number
}

export interface IProductDetails {
	product: IProduct
}

export interface TypeProductData {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export type TypeProducts = {
	products: IProduct[]
}
