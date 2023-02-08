import RegisterScreen from '@/screens/auth/registerScreen/RegisterScreen'
import SignInScreen from '@/screens/auth/signIn/SignInScreen'
import HomeScreen from '@/screens/home/HomeScreen'
import WelcomeScreen from '@/screens/onboarding/WelcomeScreen/WelcomeScreen'
import PlaceScreen from '@/screens/place/PlaceScreen'

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
