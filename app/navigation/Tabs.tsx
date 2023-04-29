import { Feather, Octicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { View } from 'react-native'

import { TabIcon } from '@/components'
import { HomeScreen } from '@/screens'

const Tab = createBottomTabNavigator()

const Tabs: FC = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: 'rgba(0,0,0,.55)',
					elevation: 0,
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					borderTopWidth: 0,
					borderTopLeftRadius: 25,
					borderTopRightRadius: 25
				}
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => <TabIcon icon='home' {...{ focused }} />
				}}
				name='Home'
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => <TabIcon icon='user' {...{ focused }} />
				}}
				name='User'
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon icon='shopping-bag' {...{ focused }} />
					)
				}}
				name='Cart'
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon icon='message-circle' {...{ focused }} />
					)
				}}
				name='Messages'
				component={HomeScreen}
			/>
		</Tab.Navigator>
	)
}

export default Tabs
