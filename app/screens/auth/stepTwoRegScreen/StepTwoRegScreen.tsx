import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	ImageBackground,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Fields } from './components'
import { CustomButton, GoBackButton } from '@/components'
import { IAdditionalFields, ScreenProps } from '@/types'

const StepTwoRegScreen: FC<ScreenProps> = ({ navigation }) => {
	const { control, reset, handleSubmit } = useForm<IAdditionalFields>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<IAdditionalFields> = data => {
		navigation.navigate('HomeScreen')
		console.log('Username is: ', data.name)
		console.log('Email is: ', data.surname)
		console.log('Password is: ', data.phone)

		reset()
	}

	const [isFocus, setIsFocus] = useState(false)
	const [isKeyboard, setIsKeyboard] = useState(false)

	Keyboard.addListener('keyboardDidShow', () => {
		setIsKeyboard(true)
	})
	Keyboard.addListener('keyboardDidHide', () => {
		setIsKeyboard(false)
	})

	return (
		<ImageBackground
			source={require('../../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<SafeAreaView className='flex-1 px-6 pt-7'>
					<View className='justify-left self-start'>
						<GoBackButton callback={navigation.goBack} />
					</View>

					{!isKeyboard && (
						<View className='flex-start'>
							<Text className='text-white text-2xl font-bold my-4'>
								Давай трішки заповнемо твій профіль
							</Text>
							<Text className='text-white text-base font-light mb-6'>
								Ця інформація підвищить безпеку та унікальність твого аккаунту
							</Text>
						</View>
					)}

					<KeyboardAvoidingView
						// style={{ marginBottom: isFocused ? 10 : 10 }}
						behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
						className='flex-1 items-center'
					>
						<Fields
							{...{ control, handleSubmit, onSubmit }}
							focus={() => {
								setIsFocus(true)
							}}
							blur={() => {
								setIsFocus(false)
							}}
						/>
					</KeyboardAvoidingView>

					<KeyboardAvoidingView
						// style={{ marginBottom: isFocused ? 10 : 10 }}
						behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
						className='justify-center items-center  flex-end'
					>
						<CustomButton
							// onPress={handleSubmit(onSubmit)}
							onPress={() => {
								navigation.navigate('StepTwoRegScreen')
							}}
							customClassName='mb-7'
						>
							До закладів
						</CustomButton>
					</KeyboardAvoidingView>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	)
}

export default StepTwoRegScreen
