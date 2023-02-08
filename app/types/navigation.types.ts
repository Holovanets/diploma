import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	WelcomeScreen: undefined
	SignInScreen: undefined
	RegisterScreen: undefined
	HomeScreen: undefined
	PlaceScreen: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
