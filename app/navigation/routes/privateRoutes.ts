import {
	ForgotPasswordScreen,
	HomeScreen,
	PlaceScreen,
	RegisterScreen,
	SignInScreen,
	StepTwoRegScreen,
	WelcomeScreen
} from '@/screens'
import { IRoute } from '@/types'

export const routes: IRoute[] = [
	// {
	// 	name: 'WelcomeScreen',
	// 	component: WelcomeScreen
	// },
	// {
	// 	name: 'SignInScreen',
	// 	component: SignInScreen
	// },
	// {
	// 	name: 'ForgotPasswordScreen',
	// 	component: ForgotPasswordScreen
	// },
	{
		name: 'RegisterScreen',
		component: RegisterScreen
	},
	{
		name: 'StepTwoRegScreen',
		component: StepTwoRegScreen
	}
	// {
	// 	name: 'HomeScreen',
	// 	component: HomeScreen
	// },
	// {
	// 	name: 'PlaceScreen',
	// 	component: PlaceScreen
	// }
]
