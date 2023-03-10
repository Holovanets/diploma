import {
	ForgotPasswordScreen,
	HomeScreen,
	PlaceScreen,
	RegisterScreen,
	SignInScreen,
	WelcomeScreen
} from '@/screens'
import { IRoute } from '@/types'

export const routes: IRoute[] = [
	// {
	// 	name: 'WelcomeScreen',
	// 	component: WelcomeScreen
	// },
	{
		name: 'SignInScreen',
		component: SignInScreen
	},
	{
		name: 'ForgotPasswordScreen',
		component: ForgotPasswordScreen
	},
	{
		name: 'HomeScreen',
		component: HomeScreen
	},
	{
		name: 'RegisterScreen',
		component: RegisterScreen
	},
	{
		name: 'PlaceScreen',
		component: PlaceScreen
	}
]
