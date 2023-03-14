import { Octicons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC, LegacyRef, MutableRefObject, useEffect, useState } from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import {
	Keyboard,
	Text,
	TextInput,
	TextInputAndroidProps,
	View
} from 'react-native'
import { Pressable } from 'react-native'

import { IInput } from '@/types'

interface CustomInputProps extends IInput {
	iconName?: keyof typeof Octicons.glyphMap
	autoCapitalize: 'none' | 'sentences' | 'words' | 'characters'
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
	autoCorrect: boolean
	secure: boolean
	reference?: MutableRefObject<TextInput | null>
	nextRef?: any
	onSubmitEditing?: () => void
	focus?: () => void
	blur?: () => void
}

const CustomInput: FC<CustomInputProps> = ({
	autoComplete,
	autoCapitalize,
	autoCorrect,
	returnKeyType,
	control,
	iconName,
	name,
	placeholder,
	rules,
	secure,
	reference,
	focus,
	blur,
	onSubmitEditing
}) => {
	const [secureTextEntry, setSecureTextEntry] = useState(secure)

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
								!!error ? 'border-red-500' : 'border-transparent',
								secure ? 'py-3' : 'py-5',
								secure && !!error ? 'ml-2' : ''
							)}
						>
							{iconName && (
								<View className='mr-4 mt-0.5 justify-center'>
									<Octicons name={iconName} size={24} color='white' />
								</View>
							)}
							<TextInput
								{...{
									value,
									placeholder,
									secureTextEntry,
									autoCapitalize,
									autoComplete,
									autoCorrect,
									returnKeyType,
									onSubmitEditing
								}}
								ref={reference}
								onChangeText={onChange}
								className='text-white text-lg '
								placeholderTextColor='#FFF'
								style={{ flex: 1 }}
								blurOnSubmit={false}
								onBlur={blur}
								onFocus={focus}
							/>

							{secure && (
								<View className='mt-0.5 ml-4 rounded-full overflow-hidden justify-cener items-center align-center'>
									<Pressable
										className='px-2 py-2'
										onPress={() => setSecureTextEntry(!secureTextEntry)}
										android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
									>
										{secureTextEntry ? (
											<Octicons name='eye' size={24} color='white' />
										) : (
											<Octicons name='eye-closed' size={24} color='white' />
										)}
									</Pressable>
								</View>
							)}
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

export default CustomInput
