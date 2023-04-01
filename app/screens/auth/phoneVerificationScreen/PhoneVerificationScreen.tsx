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

import { Fields } from './components'
import { CustomButton, GoBackButton } from '@/components'
import { ScreenProps } from '@/types'

interface PhoneVerificationScreenProps extends ScreenProps {
	route: {
		params: {
			phoneNumber: string
		}
	}
}

const PhoneVerificationScreen: FC<PhoneVerificationScreenProps> = ({
	navigation,
	route: {
		params: { phoneNumber }
	}
}) => {
	const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' })
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
							Впиши 4-х значний код із повідомлення
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
					</KeyboardAvoidingView>

					<KeyboardAvoidingView
						// style={{ marginBottom: isFocused ? 10 : 10 }}
						behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
						className='justify-center items-center  flex-end'
					>
						<CustomButton
							onPress={() => {
								// navigation.navigate('PhoneVerificationScreen')
								console.log(otp)
							}}
							customClassName='mb-7'
						>
							До закладів
						</CustomButton>
					</KeyboardAvoidingView>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	)
}

export default PhoneVerificationScreen
