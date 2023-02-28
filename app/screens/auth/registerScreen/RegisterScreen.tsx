import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CustomButton, CustomInput, GoBackButton } from '@/components'
import { validEmail } from '@/regex'
import { IAuthFormData, ScreenProps } from '@/types'

const RegisterScreen: FC<ScreenProps> = ({ navigation }) => {
	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onSubmit'
	})

	return (
		<SafeAreaView className='justify-center items-center content-center flex-1 bg-price px-6 py-7'>
			<View className='flex-start justify-left w-full'>
				<GoBackButton callback={navigation.goBack} />
			</View>
			<View className='flex-1 justify-center items-center bg-black'>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
				</TouchableWithoutFeedback>
			</View>
			<View className='flex-end justify-center items-center'>
				<CustomButton onPress={navigation.goBack}>
					Створити аккаунт
				</CustomButton>
			</View>
		</SafeAreaView>
	)
}

export default RegisterScreen
