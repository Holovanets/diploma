import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import SignInScreen from '@/screens/signIn/SignInScreen'

export default function App() {
	return (
		<SafeAreaView className='flex-1'>
			<SignInScreen />
			<StatusBar style='light' />
		</SafeAreaView>
	)
}
