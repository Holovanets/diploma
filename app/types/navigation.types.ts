import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	SignInScreen: undefined
	RegisterScreen: undefined
	HomeScreen: undefined
	PlaceScreen: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
