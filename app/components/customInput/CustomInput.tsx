import cn from 'clsx'
import { FC } from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import { Keyboard, Text, TextInput, View } from 'react-native'

import { IInput } from '@/types'

const CustomInput: FC<IInput> = ({
	control,
	name,
	placeholder,
	secureTextEntry = false,
	rules
}) => {
	return (
		<View>
			<Controller
				{...{ control }}
				name={name}
				rules={rules}
				render={({
					field: { value, onBlur, onChange },
					fieldState: { error }
				}) => (
					<>
						{/*TODO
        Вставить глобальную переменную на фон placeholdera
      */}
						<View
							className={cn(
								`rounded-3xl border py-5 px-8 my-2 w-80`,
								!!error ? 'border-red-500' : 'border-transparent'
							)}
							style={{
								backgroundColor: 'rgba(255,255,255, 0.1)'
							}}
						>
							<TextInput
								{...{ value, onBlur, placeholder, secureTextEntry }}
								onChangeText={onChange}
								autoCapitalize='none'
								className='text-white text-lg '
								placeholderTextColor='#FFF'
								onBlur={Keyboard.dismiss}
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

export default CustomInput
