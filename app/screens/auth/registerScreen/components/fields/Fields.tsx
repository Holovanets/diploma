import { FC, useRef } from 'react'
import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { TextInput, View } from 'react-native'

import { CustomInput } from '@/components'
import { validEmail, validPassword, validUsername } from '@/regex'
import { IBaseFields } from '@/types'

interface FieldsProps {
	control: Control<IBaseFields | any>
	onSubmit: SubmitHandler<IBaseFields>
	handleSubmit: UseFormHandleSubmit<any>
	focus?: () => void
	blur?: () => void
}

const Fields: FC<FieldsProps> = ({
	control,
	onSubmit,
	handleSubmit,
	focus,
	blur
}) => {
	const emailRef = useRef<TextInput | null>(null)
	const passwordRef = useRef<TextInput | null>(null)

	return (
		<View className=''>
			<CustomInput
				{...{ control, blur, focus }}
				autoComplete='username'
				autoCorrect={false}
				secure={false}
				name='username'
				iconName={'person'}
				placeholder="Ім'я користувача"
				returnKeyType='next'
				autoCapitalize='none'
				onSubmitEditing={() => {
					emailRef.current?.focus()
				}}
				rules={{
					required: "Обов'язково введіть email",
					pattern: {
						value: validUsername,
						message:
							"Ім'я користувача повинно мати тільки маленькі латинські літери, цифри та знаки '_','-'"
					},
					minLength: {
						value: 6,
						message: "Ім'я занадто коротке. Мілімум 6 символів"
					},
					maxLength: {
						value: 18,
						message: "Ім'я занадто велике. Максимум 18 символів"
					}
				}}
			/>
			<CustomInput
				{...{ control, blur, focus }}
				autoComplete='email'
				autoCorrect={false}
				secure={false}
				name='email'
				iconName={'mail'}
				placeholder='E-mail'
				returnKeyType='next'
				autoCapitalize='none'
				reference={emailRef}
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
				{...{ control, blur, focus }}
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
