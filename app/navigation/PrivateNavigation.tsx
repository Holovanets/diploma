import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { FC } from 'react'

import { privateRoutes, publicRoutes, welcomeRoutes } from './routes'

const Stack = createStackNavigator()

interface INavProps {
	token: string
	isAppLoading: boolean
	isFirstTimeUse: boolean
}

const PrivateNavigation: FC<INavProps> = ({
	token,
	isAppLoading,
	isFirstTimeUse
}) => {
	console.log(isFirstTimeUse)

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			{token
				? privateRoutes.map(route => (
						<Stack.Screen key={route.name} {...route} />
				  ))
				: isFirstTimeUse
				? welcomeRoutes.map(route => (
						<Stack.Screen key={route.name} {...route} />
				  ))
				: publicRoutes.map(route => (
						<Stack.Screen key={route.name} {...route} />
				  ))}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
