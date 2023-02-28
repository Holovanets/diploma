import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	Image,
	ImageBackground,
	Keyboard,
	Text,
	TouchableWithoutFeedback,
	View,
	useWindowDimensions
} from 'react-native'

import { LoginInput, SignTextLink, SocialButton } from './components'
import { CustomButton } from '@/components'
import { Images } from '@/constants'
import { validEmail } from '@/regex'
import { IAuthFormData, ScreenProps } from '@/types'

const SignInScreen: FC<ScreenProps> = ({ navigation }) => {
	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onSubmit'
	})
	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		navigation.navigate('HomeScreen')
		reset()
	}

	const { height } = useWindowDimensions()

	return (
		<ImageBackground
			source={require('../../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<View className=' justify-center items-center flex-1 '>
				{/*FIX IT
					Don`t use TouchableWithoutFeedback, use vanilla pressable etc. 
				*/}
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<View className='items-center content-center justify-center  '>
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
						<LoginInput
							{...{ control }}
							name='email'
							placeholder='Email'
							secureTextEntry={false}
							rules={{
								required: "Обов'язково введіть email",
								pattern: {
									value: validEmail,
									message: 'Email неправильний '
								}
							}}
						/>
						<LoginInput
							{...{ control }}
							name='password'
							placeholder='Password'
							secureTextEntry={true}
							rules={{
								required: "Обов'язково введіть пароль",
								minLength: {
									value: 8,
									message: 'Пароль занадто короткий'
								}
							}}
						/>
						<Text className='text-white font-extrabold text-base self-center my-4'>
							Або використати свої аккаунти
						</Text>

						<View className='flex-row w-80 overflow-hidden space-x-2 justify-between'>
							<SocialButton title='Google' img={Images.GOOGLE_LOGO} />
							<SocialButton title='Facebook' img={Images.FACEBOOK_LOGO} />
						</View>
						<SignTextLink
							callback={() => {
								navigation.navigate('ForgotPasswordScreen')
							}}
						>
							Забув пароль :(
						</SignTextLink>
						<View className='my-5 justify-center '>
							<CustomButton
								onPress={handleSubmit(onSubmit)}
								customClassName='my-4'
							>
								Увійти
							</CustomButton>
							<SignTextLink
								callback={() => {
									navigation.navigate('RegisterScreen')
								}}
							>
								Я досі не маю акаунту
							</SignTextLink>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</ImageBackground>
	)
}

export default SignInScreen
