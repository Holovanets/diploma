import {
	ForgotPasswordScreen,
	PhoneVerificationScreen,
	RegisterScreen,
	SignInScreen,
	StepTwoRegScreen
} from '@/screens'
import { IRoute } from '@/types'

export const publicRoutes: IRoute[] = [
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
