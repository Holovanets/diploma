import {
	HomeScreen,
	NotificationsScreen,
	PlaceScreen,
	SettingsScreen
} from '@/screens'
import { IRoute } from '@/types'

export const privateRoutes: IRoute[] = [
	{
		name: 'HomeScreen',
		component: HomeScreen
	},
	{
		name: 'PlaceScreen',
		component: PlaceScreen
	},
	{
		name: 'NotificationsScreen',
		component: NotificationsScreen
	},
	{
		name: 'SettingsScreen',
		component: SettingsScreen
	}
]
