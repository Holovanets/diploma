import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

const HomeScreen: FC = () => {
	const navigation = useNavigation()
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
