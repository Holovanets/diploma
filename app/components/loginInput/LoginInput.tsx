import cn from 'clsx'
import { FC } from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IAuthFormData } from '@/types/auth.interface'

import { validEmail } from './email.rgx'

const LoginInput: FC<{ control: Control<IAuthFormData> }> = ({ control }) => {
	return (
		<View>
			<Controller
				{...{ control }}
				name='email'
				rules={{
					required: "Обов'язково введіть email",
					pattern: {
						value: validEmail,
						message: 'Email неправильний '
					}
				}}
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
								placeholder='Email'
								{...{ value, onBlur }}
								onChangeText={onChange}
								autoCapitalize='none'
								className='text-white text-lg '
								placeholderTextColor='#FFF'
							/>
						</View>

						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>
		</View>
	)
}

export default LoginInput
