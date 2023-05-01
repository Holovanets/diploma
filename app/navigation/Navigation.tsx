import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PrivateNavigation from './PrivateNavigation'
import Tabs from './Tabs'
import { GeneralAction } from '@/actions'
import {
	ForgotPasswordScreen,
	HomeScreen,
	PhoneVerificationScreen,
	PlaceScreen,
	RegisterScreen,
	SignInScreen,
	StepTwoRegScreen,
	WelcomeScreen
} from '@/screens'

interface INavProps {
	token?: string
}
const Navigation: FC<INavProps> = () => {
	const { isAppLoading, token, isFirstTimeUse } = useSelector(
		state => state?.generalState
	)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(GeneralAction.appStart())
	}, [])
	// console.log(token)
	const Stack = createStackNavigator()
	return (
		<>
			<NavigationContainer>
				<BottomSheetModalProvider>
					<Stack.Navigator
						screenOptions={{
							headerShown: false
						}}
					>
						{!token ? (
							<>
								{isFirstTimeUse && (
									<Stack.Screen
										name='WelcomeScreen'
										component={WelcomeScreen}
									/>
								)}
								<Stack.Screen name='SignInScreen' component={SignInScreen} />
								<Stack.Screen
									name='ForgotPasswordScreen'
									component={ForgotPasswordScreen}
								/>
								<Stack.Screen
									name='RegisterScreen'
									component={RegisterScreen}
								/>
								<Stack.Screen
									name='StepTwoRegScreen'
									component={StepTwoRegScreen}
								/>
								<Stack.Screen
									name='PhoneVerificationScreen'
									component={PhoneVerificationScreen}
								/>
							</>
						) : (
							<>
								<Stack.Screen name='nav' component={Tabs} />

								{/* <Stack.Screen name='HomeScreen' component={HomeScreen} /> */}
								<Stack.Screen name='PlaceScreen' component={PlaceScreen} />
							</>
						)}
					</Stack.Navigator>
				</BottomSheetModalProvider>
			</NavigationContainer>
			{/* {user && currentRoute && <Text>{currentRoute} </Text>} */}
		</>
	)
}

export default Navigation
