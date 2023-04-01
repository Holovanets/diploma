import { StackNavigationProp } from '@react-navigation/stack'

export interface ScreenProps {
	navigation: StackNavigationProp<any, any>
	setToken?: (token: string) => void
}
