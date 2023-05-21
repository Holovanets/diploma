import { FC, useState } from 'react'
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
import { connect, useDispatch } from 'react-redux'

import GeneralAction from '@/actions/GeneralAction'

import { Fields } from './components'
import { CustomButton, GoBackButton } from '@/components'
import { AuthService, StorageService } from '@/providers'
import { IFinalFields, ScreenProps } from '@/types'

interface PhoneVerificationScreenProps extends ScreenProps {
	route: {
		params: {
			username: string
			email: string
			password: string
			name: string
			surname: string
			phoneNumber: string
		}
	}
}

const PhoneVerificationScreen: FC<PhoneVerificationScreenProps> = ({
	navigation,
	route: {
		params: { username, email, password, name, surname, phoneNumber }
	}
}) => {
	// console.log('Username is: ', username)
	// console.log('Email is: ', email)
	// console.log('Password is: ', password)
	// console.log('Name is: ', name)
	// console.log('Surname is: ', surname)
	// console.log(`Phone is:  ${phoneNumber}`)
	const [isLoading, setIsLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const data = {
		email,
		password,
		username,
		name,
		surname
	}
	const [otp, setOtp] = useState({ 1: '1', 2: '1', 3: '1', 4: '1' })
	const dispatch = useDispatch()
	const reg = (data: IFinalFields) => {
		// console.log(data)
		setIsLoading(true)
		AuthService.register(data).then(response => {
			// console.log(response)
			if (!response?.status) {
				setErrorMessage(response?.message)
			} else {
				console.log('good')
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
	}

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
					<View className='flex-start'>
						<Text className='text-white text-2xl font-bold my-4'>
							Впиши 4-х значний код із повідомлення (Просто натисни до закладів)
						</Text>
						<Text className='text-white text-base font-light mb-6'>
							Код надійшов на {phoneNumber}.
						</Text>
					</View>

					<KeyboardAvoidingView
						// style={{ marginBottom: isFocused ? 10 : 10 }}
						behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
						className='flex-1 items-center'
					>
						<Fields {...{ otp, setOtp }} />
						{errorMessage && (
							<Text className='text-accentRed text-base mt-3 ml-2'>
								{errorMessage}
							</Text>
						)}
					</KeyboardAvoidingView>

					<KeyboardAvoidingView
						// style={{ marginBottom: isFocused ? 10 : 10 }}
						behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
						className='justify-center items-center  flex-end'
					>
						<CustomButton
							onPress={() => {
								reg(data)
							}}
							customClassName='mb-7'
							loading={isLoading}
						>
							До закладів
						</CustomButton>
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

export default connect(null, mapDispatchProps)(PhoneVerificationScreen)
