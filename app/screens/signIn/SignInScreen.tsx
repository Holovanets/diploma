import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	Image,
	Keyboard,
	Text,
	TouchableWithoutFeedback,
	View,
	useWindowDimensions
} from 'react-native'

import { IAuthFormData } from '@/types/auth.interface'

import LoginInput from '../../components/loginInput/LoginInput'
import SignButton from '../../components/signButton/SignButton'

const SignInScreen: FC = () => {
	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
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
		<View className='bg-primary justify-center items-center flex-1 '>
			<Image
				source={require('../../../assets/images/logo.png')}
				resizeMode='contain'
				className='self-center'
				style={{
					height: height * 0.3,
					maxWidth: 300,
					maxHeight: 200
				}}
			/>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View className='items-center content-center justify-center '>
					<LoginInput {...{ control }} />
					<LoginInput {...{ control }} />
					<Text className='text-white font-extrabold text-base self-center my-4'>
						Або використати свої аккаунти dawd
					</Text>

					<SignButton onPress={handleSubmit(onSubmit)}> Увійти </SignButton>
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default SignInScreen
