import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	Image,
	ImageBackground,
	Keyboard,
	Platform,
	Text,
	TouchableWithoutFeedback,
	View,
	useWindowDimensions
} from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect, useDispatch } from 'react-redux'

import { Fields, SignTextLink, SocialButton } from './components'
import GeneralAction from '@/actions/GeneralAction'
import { CustomButton } from '@/components'
import { Images } from '@/constants'
import { AuthService, StorageService } from '@/providers'
import { IAuthFormData, ScreenProps } from '@/types'

const SignInScreen: FC<ScreenProps> = ({ navigation, setToken }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onSubmit'
	})
	const dispatch = useDispatch()
	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		setIsLoading(true)
		AuthService.login(data).then(response => {
			console.log(response)
			if (!response?.status) {
				setErrorMessage(response?.message)
			} else {
				// console.log('good')
				// console.log(response?.tokens?.auth_token)
				StorageService.setToken(response?.tokens?.auth_token).then(() => {
					dispatch(GeneralAction.setToken(response?.tokens?.auth_token))
				})
				StorageService.setRefreshToken(response?.tokens?.refresh_token).then(
					() => {
						dispatch(
							GeneralAction.setRefreshToken(response?.tokens?.refresh_token)
						)
					}
				)
			}
			setIsLoading(false)
		})

		// reset()
	}

	const { height } = useWindowDimensions()

	return (
		<ImageBackground
			source={require('../../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<SafeAreaView className=' justify-center items-center flex-1 py-7'>
					<View className='items-center content-center justify-center flex-1 '>
						<Image
							source={require('../../../../assets/images/logo.png')}
							resizeMode='contain'
							className='self-center mb-5'
							style={{
								height: height * 0.3,
								maxWidth: 200,
								maxHeight: 150
							}}
						/>

						<KeyboardAvoidingView
							behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						>
							<Fields {...{ control, handleSubmit, onSubmit }} />
							{errorMessage && (
								<Text className='text-accentRed text-base mt-3 ml-2'>
									{errorMessage}
								</Text>
							)}
						</KeyboardAvoidingView>

						<Text className='text-white font-extrabold text-base self-center my-4'>
							Або використати свої аккаунти
						</Text>

						<View className='flex-row w-80 overflow-hidden space-x-2 justify-between'>
							<SocialButton title='Google' img={Images.GOOGLE_LOGO} />
							<SocialButton title='Facebook' img={Images.FACEBOOK_LOGO} />
						</View>
						<View className='flex-row justify-between w-80 mt-5'>
							<SignTextLink
								callback={() => {
									navigation.navigate('RegisterScreen')
								}}
							>
								Я досі не маю акаунту
							</SignTextLink>
							<SignTextLink
								callback={() => {
									navigation.navigate('ForgotPasswordScreen')
								}}
							>
								Забув пароль :(
							</SignTextLink>
						</View>
					</View>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
					>
						<View className='flex-end justify-center'>
							<CustomButton
								loading={isLoading}
								onPress={handleSubmit(onSubmit)}
								customClassName='my-4'
							>
								Увійти
							</CustomButton>
						</View>
					</KeyboardAvoidingView>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	)
}

const mapDispatchProps = (dispatch: any) => {
	return {
		setToken: (token: string) => dispatch(GeneralAction.setToken(token)),
		setRefreshToken: (refreshToken: string) =>
			dispatch(GeneralAction.setRefreshToken(refreshToken))
	}
}

export default connect(null, mapDispatchProps)(SignInScreen)
