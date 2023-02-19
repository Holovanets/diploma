import {
	HomeScreen,
	PlaceScreen,
	RegisterScreen,
	SignInScreen,
	WelcomeScreen
} from '@/screens'
import { IRoute } from '@/types'

export const routes: IRoute[] = [
	{
		name: 'WelcomeScreen',
		component: WelcomeScreen
	},
	{
		name: 'SignInScreen',
		component: SignInScreen
	},
	{
		name: 'RegisterScreen',
		component: RegisterScreen
	},
	{
		name: 'HomeScreen',
		component: HomeScreen
	},
	{
		name: 'PlaceScreen',
		component: PlaceScreen
	}
]
