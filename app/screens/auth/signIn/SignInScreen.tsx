import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
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
// sap
import { IAuthFormData } from '@/types/auth.interface'

import SignButton from '../../../components/customButton/CustomButton'
import { validEmail } from '../../../regex/email.rgx'
import { TypeRootStackParamList } from '../../../types/navigation.types'

import CustomInput from './components/customInput/CustomInput'
import SignTextLink from './components/signTextLink/SignTextLink'
import SocialButton from './components/socialButton/SocialButton'

const googlePicture = require('../../../../assets/images/logos/GOOGLE.png')
const facebookPicture = require('../../../../assets/images/logos/FACEBOOK.png')

type signInScreenProp = StackNavigationProp<TypeRootStackParamList>

const SignInScreen: FC = () => {
	const navigation = useNavigation<signInScreenProp>()

	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onSubmit'
	})
	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		// sending Login data to back

		// setUser({
		// 	_id: '',
		// 	...data
		// })
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
						<CustomInput
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
						<CustomInput
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
							<SocialButton title='Google' img={googlePicture} />
							<SocialButton title='Facebook' img={facebookPicture} />
						</View>
						<SignTextLink>Забув пароль :(</SignTextLink>
						<View className='my-5 justify-center '>
							<SignButton onPress={handleSubmit(onSubmit)}> Увійти </SignButton>
							<SignTextLink>Я досі не маю акаунту</SignTextLink>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</ImageBackground>
	)
}

export default SignInScreen
