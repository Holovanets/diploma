import { FC, useRef } from 'react'
import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { CustomInput } from '@/components'
import { validEmail, validPassword, validUsername } from '@/regex'
import { IBaseFields } from '@/types'

interface FieldsProps {
	control: Control<IBaseFields | any>
	onSubmit: SubmitHandler<IBaseFields>
	handleSubmit: UseFormHandleSubmit<any>
}

const Fields: FC<FieldsProps> = ({ control, onSubmit, handleSubmit }) => {
	const passwordRef = useRef<TextInput | null>(null)

	return (
		<View className='justify-center items-center '>
			<CustomInput
				{...{ control }}
				autoComplete='email'
				autoCorrect={false}
				secure={false}
				name='email'
				iconName={'mail'}
				placeholder='E-mail'
				returnKeyType='next'
				autoCapitalize='none'
				onSubmitEditing={() => {
					passwordRef.current?.focus()
				}}
				rules={{
					required: "Обов'язково введіть email",
					pattern: {
						value: validEmail,
						message: 'E-mail неправильний'
					}
				}}
			/>
			<CustomInput
				{...{ control }}
				autoComplete='password'
				autoCorrect={false}
				secure={true}
				name='password'
				iconName={'lock'}
				placeholder='Пароль'
				returnKeyType='done'
				autoCapitalize='none'
				reference={passwordRef}
				onSubmitEditing={handleSubmit(onSubmit)}
				rules={{
					required: "Обов'язково введіть пароль",
					pattern: {
						value: validPassword,
						message:
							'Пароль повинен мати хоча б одну літеру, цифру та спеціальний символ'
					}
				}}
			/>
		</View>
	)
}

export default Fields
