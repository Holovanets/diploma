import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { ScreenProps } from '@/types'

const HomeScreen: FC<ScreenProps> = ({ navigation }) => {
	return (
		<View>
			<Text>HomeScreen</Text>
			<Pressable onPress={() => navigation.goBack()}>
				<Text>Go back</Text>
			</Pressable>
		</View>
	)
}

export default HomeScreen
