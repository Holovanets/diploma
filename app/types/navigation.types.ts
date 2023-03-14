import { ComponentType } from 'react'

import { ScreenProps } from './screenProps.interface'

export type TypeRootStackParamList = {
	WelcomeScreen: undefined
	SignInScreen: undefined
	HomeScreen: undefined
	PlaceScreen: undefined
	RegisterScreen: undefined
	StepTwoRegScreen: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType<ScreenProps>
}
