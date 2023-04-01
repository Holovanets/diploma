import { HomeScreen, PlaceScreen } from '@/screens'
import { IRoute } from '@/types'

export const privateRoutes: IRoute[] = [
	{
		name: 'HomeScreen',
		component: HomeScreen
	},
	{
		name: 'PlaceScreen',
		component: PlaceScreen
	}
]
