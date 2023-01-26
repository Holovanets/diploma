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

import { IAuthFormData } from '@/types/auth.interface'

import LoginInput from '../../components/loginInput/LoginInput'
import SignButton from '../../components/signButton/SignButton'
import SignTextLink from '../../components/signTextLink/SignTextLink'
import SocialButton from '../../components/socialButton/SocialButton'

const googlePicture = require('../../../assets/images/logos/GOOGLE.png')
const facebookPicture = require('../../../assets/images/logos/FACEBOOK.png')

const SignInScreen: FC = () => {
	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onSubmit'
	})
	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		// setUser({
		// 	_id: '',
		// 	...data
		// })
		reset()
	}

	const { height } = useWindowDimensions()

	return (
		<ImageBackground
			source={require('../../../assets/images/bckg.png')}
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
							source={require('../../../assets/images/logo.png')}
							resizeMode='contain'
							className='self-center mb-5'
							style={{
								height: height * 0.3,
								maxWidth: 200,
								maxHeight: 150
							}}
						/>
						<LoginInput {...{ control }} />
						<LoginInput {...{ control }} />
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
