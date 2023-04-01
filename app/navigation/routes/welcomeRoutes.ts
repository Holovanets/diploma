import {
	ForgotPasswordScreen,
	PhoneVerificationScreen,
	RegisterScreen,
	SignInScreen,
	StepTwoRegScreen,
	WelcomeScreen
} from '@/screens'
import { IRoute } from '@/types'

export const welcomeRoutes: IRoute[] = [
	{
		name: 'WelcomeScreen',
		component: WelcomeScreen
	},
	{
		name: 'SignInScreen',
		component: SignInScreen
	},
	{
		name: 'ForgotPasswordScreen',
		component: ForgotPasswordScreen
	},
	{
		name: 'RegisterScreen',
		component: RegisterScreen
	},
	{
		name: 'StepTwoRegScreen',
		component: StepTwoRegScreen
	},
	{
		name: 'PhoneVerificationScreen',
		component: PhoneVerificationScreen
	}
]
