import { IRoute } from '@/types/navigation.types'

import RegisterScreen from '../screens/auth/registerScreen/RegisterScreen'
import SignInScreen from '../screens/auth/signIn/SignInScreen'
import HomeScreen from '../screens/home/HomeScreen'
import PlaceScreen from '../screens/place/PlaceScreen'

export const routes: IRoute[] = [
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
