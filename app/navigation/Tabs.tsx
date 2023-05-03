import { Feather, Octicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { Pressable, View } from 'react-native'

import { TabButton, TabIcon } from '@/components'
import { Colors } from '@/constants'
import { HomeScreen } from '@/screens'

const Tab = createBottomTabNavigator()

const Tabs: FC = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				// tabBarButton: props => <TabIcon {...props}/>,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					zIndex: 10000,
					backgroundColor: Colors.M_DARK,
					elevation: 0,
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					borderTopWidth: 0
				}
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon icon_filled='home' icon='home-outline' {...{ focused }} />
					)
				}}
				name='Home'
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							icon_filled='person'
							icon='person-outline'
							{...{ focused }}
						/>
					)
				}}
				name='User'
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							icon='basket-outline'
							icon_filled='basket-sharp'
							{...{ focused }}
						/>
					)
				}}
				name='Cart'
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							icon='notifications-outline'
							icon_filled='ios-notifications'
							{...{ focused }}
						/>
					)
				}}
				name='Messages'
				component={HomeScreen}
			/>
		</Tab.Navigator>
	)
}

export default Tabs
