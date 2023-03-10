import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	ImageBackground,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Fields } from './components'
import { CustomButton, CustomCheckBox, GoBackButton } from '@/components'
import { IBaseFields, ScreenProps } from '@/types'

const RegisterScreen: FC<ScreenProps> = ({ navigation }) => {
	const { control, reset, handleSubmit } = useForm<IBaseFields>({
		mode: 'onSubmit'
	})

	const [isFocused, setIsFocused] = useState(false)

	const [isAutoExit, setIsAutoExit] = useState(false)

	const onSubmit: SubmitHandler<IBaseFields> = data => {
		navigation.navigate('HomeScreen')
		console.log('Username is: ', data.username)
		console.log('Email is: ', data.email)
		console.log('Password is: ', data.password)

		reset()
	}
	const handleChecked = () => {
		setIsAutoExit(!isAutoExit)
	}

	return (
		<ImageBackground
			source={require('../../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<SafeAreaView className='justify-center items-center content-center flex-1 px-6 pt-7'>
					<View className='flex-start justify-left w-full'>
						<GoBackButton callback={navigation.goBack} />
					</View>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
						className='flex-1 justify-center items-center '
					>
						<Fields
							{...{ control, handleSubmit, onSubmit }}
							// blur={() => {
							// 	setIsFocused(false)
							// }}
							// focus={() => {
							// 	setIsFocused(true)
							// 	console.log(isFocused)
							// }}
						/>
						<Pressable
							onPress={() => {
								handleChecked()
							}}
							className='mt-5 flex-row items-center'
						>
							<CustomCheckBox checked={isAutoExit} />
							<Text className='ml-6 text-base text-white/60'>
								Не виходити з мого аккаунту
							</Text>
						</Pressable>
					</KeyboardAvoidingView>
					<KeyboardAvoidingView
						// style={{ marginBottom: isFocused ? 10 : 10 }}
						behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
						className='flex-end justify-center mb-7'
					>
						<CustomButton
							onPress={handleSubmit(onSubmit)}
							customClassName='my-4'
						>
							Створити аккаунт
						</CustomButton>
					</KeyboardAvoidingView>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	)
}

export default RegisterScreen
