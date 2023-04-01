import LottieView from 'lottie-react-native'
import { FC, useState } from 'react'
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

import { CheckBox, Fields } from './components'
import { CustomButton, GoBackButton } from '@/components'
import { Images } from '@/constants'
import { AuthService } from '@/providers'
import { IBaseFields, ScreenProps } from '@/types'

const RegisterScreen: FC<ScreenProps> = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false)

	const [isAutoExit, setIsAutoExit] = useState(true)
	const [isSendingNews, setIsSendingNews] = useState(true)

	const [errorMessage, setErrorMessage] = useState('')

	const [emailError, setEmailError] = useState<undefined | string>('')
	const [userNameError, setUserNameError] = useState<undefined | string>('')

	const { control, reset, handleSubmit } = useForm<IBaseFields>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<IBaseFields> = data => {
		// console.log(data)

		setIsLoading(true)
		chechUserExist(data).then(() => {
			setIsLoading(false)
		})
		// AuthService.register(data).then(response => {
		// 	setIsLoading(false)
		// 	// console.log(response)
		// 	if (!response?.status) {da
		// 		setErrorMessage(response?.message)
		// 	}
		// })

		// navigation.navigate('HomeScreen')
		// reset()
	}
	const chechUserExist = async (params: IBaseFields) => {
		AuthService.checkUserExist(params).then(response => {
			if (response?.status) {
				console.log(response)
				setErrorMessage('')
				navigation.navigate('StepTwoRegScreen', { ...params })
			} else {
				console.log(response)
				setErrorMessage(response?.message)
			}
		})
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
						<Fields {...{ control, handleSubmit, onSubmit }} />
						<CheckBox
							title='Не виходити з мого аккаунту'
							checked={isAutoExit}
							callback={() => {
								setIsAutoExit(!isAutoExit)
							}}
						/>
						<CheckBox
							title='Cповіщуйте о новинах на e-mail'
							checked={isSendingNews}
							callback={() => {
								setIsSendingNews(!isSendingNews)
							}}
						/>
						{errorMessage && (
							<Text className='text-accentRed text-base mt-3 ml-2'>
								{errorMessage}
							</Text>
						)}
					</KeyboardAvoidingView>
					<KeyboardAvoidingView
						// style={{ marginBottom: isFocused ? 10 : 10 }}
						behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
						className='flex-end justify-center'
					>
						<CustomButton
							onPress={handleSubmit(onSubmit)}
							// onPress={() => {
							// 	navigation.navigate('StepTwoRegScreen')
							// }}
							customClassName='mb-7'
							loading={isLoading}
						>
							Далі
						</CustomButton>
					</KeyboardAvoidingView>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	)
}

export default RegisterScreen
