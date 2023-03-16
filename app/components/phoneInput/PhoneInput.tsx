import { Octicons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC, MutableRefObject, useState } from 'react'
import { Controller } from 'react-hook-form'
import {
	Image,
	Pressable,
	Text,
	TextInput,
	TextInputAndroidProps,
	View
} from 'react-native'

import { StaticImageService } from '@/providers'
import { IInput } from '@/types'

interface CustomInputProps extends IInput {
	autoComplete: TextInputAndroidProps['autoComplete']
	returnKeyType:
		| 'none'
		| 'done'
		| 'search'
		| 'default'
		| 'go'
		| 'next'
		| 'send'
		| 'previous'
		| 'google'
		| 'join'
		| 'route'
		| 'yahoo'
		| 'emergency-call'
	reference?: MutableRefObject<TextInput | null>
	nextRef?: any
	onSubmitEditing?: () => void
	selectedCountry:
		| {
				name: string
				dial_code: string
				code: string
		  }
		| {
				name: string
				dial_code: null
				code: string
		  }
		| undefined
	setInputsConteinerY: (y: number) => void
	setIsDropDownOpen: (isDropDownOpen: boolean) => void
	isDropDownOpen: boolean
}

const PhoneInput: FC<CustomInputProps> = ({
	autoComplete,
	returnKeyType,
	control,
	name,
	placeholder,
	rules,
	reference,
	onSubmitEditing,
	setInputsConteinerY,
	selectedCountry,
	setIsDropDownOpen,
	isDropDownOpen
}) => {
	return (
		<View>
			<Controller
				{...{ control, name, rules }}
				render={({
					field: { value, onBlur, onChange },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								`rounded-3xl items-center py-5 px-8 my-2 w-80 flex-row bg-white/10 z-0`,
								!!error ? 'border-red-500' : 'border-transparent'
							)}
							onLayout={({
								nativeEvent: {
									layout: { y }
								}
							}) => setInputsConteinerY(y)}
						>
							<Pressable
								className='w-22 h-full mr-2 items-center flex-row'
								android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
								onPress={() => {
									setIsDropDownOpen(!isDropDownOpen)
								}}
							>
								<Image
									source={{
										uri: StaticImageService.getFlagIcon(selectedCountry?.code)
									}}
									className='w-6 h-6'
								/>
								<Text className='text-white text-lg mx-1.5'>
									{selectedCountry?.dial_code}
								</Text>
								<Octicons name='chevron-down' size={18} color='white' />
							</Pressable>

							<TextInput
								{...{
									value,
									placeholder,
									autoComplete,
									returnKeyType,
									onSubmitEditing
								}}
								secureTextEntry={false}
								inputMode='numeric'
								autoCapitalize='none'
								ref={reference}
								onChangeText={onChange}
								className='text-white text-lg '
								placeholderTextColor='#FFF'
								style={{ flex: 1 }}
								blurOnSubmit={false}
								keyboardType='number-pad'
							/>
						</View>
						{error && (
							<Text className='text-red-500'>
								{error.message || 'Упс. Щось трапилось'}
							</Text>
						)}
					</>
				)}
			/>
		</View>
	)
}

export default PhoneInput
