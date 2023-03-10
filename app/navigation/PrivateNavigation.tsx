import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { FC } from 'react'

import { routes } from './routes'

const Stack = createStackNavigator()

const PrivateNavigation: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			{routes.map(route => (
				<Stack.Screen key={route.name} {...route} />
			))}
		</Stack.Navigator>
	)
}
export default PrivateNavigation
