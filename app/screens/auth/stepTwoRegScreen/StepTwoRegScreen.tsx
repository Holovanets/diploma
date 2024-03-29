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
import { CountryCode } from '@/constants'
import { IAdditionalFields, ScreenProps } from '@/types'

interface StepTwoRegScreenProps extends ScreenProps {
	route: {
		params: {
			username: string
			email: string
			password: string
		}
	}
}

const StepTwoRegScreen: FC<StepTwoRegScreenProps> = ({
	navigation,
	route: {
		params: { username, email, password }
	}
}) => {
	const { control, reset, handleSubmit } = useForm<IAdditionalFields>({
		mode: 'onSubmit'
	})
	const [selectedCountry, setSelelctedCountry] = useState(
		CountryCode.find(country => country.name === 'Ukraine')
	)
	const onSubmit: SubmitHandler<IAdditionalFields> = data => {
		// @ts-ignore
		const phoneNumber = selectedCountry?.dial_code + data.phone
		navigation.navigate('PhoneVerificationScreen', {
			username,
			email,
			password,
			phoneNumber,
			...data
		})

		// reset()
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

					<View className='flex-1 items-center'>
						<Fields
							{...{
								control,
								handleSubmit,
								onSubmit,
								selectedCountry,
								setSelelctedCountry
							}}
							focus={() => {
								setIsFocus(true)
							}}
							blur={() => {
								setIsFocus(false)
							}}
						/>
					</View>

					<View className='justify-center items-center  flex-end'>
						<CustomButton
							// onPress={() => {
							// 	navigation.navigate('PhoneVerificationScreen')
							// }}

							onPress={handleSubmit(onSubmit)}
							customClassName='mb-7'
						>
							Далі
						</CustomButton>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	)
}

export default StepTwoRegScreen
