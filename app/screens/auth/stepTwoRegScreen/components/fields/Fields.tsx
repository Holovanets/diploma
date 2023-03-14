import { FC, useRef } from 'react'
import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { TextInput, View } from 'react-native'

import { CustomInput } from '@/components'
import { validEmail, validPassword, validUsername } from '@/regex'
import { IAdditionalFields, IBaseFields } from '@/types'

interface FieldsProps {
	control: Control<IAdditionalFields | any>
	onSubmit: SubmitHandler<IAdditionalFields>
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
	const secondRef = useRef<TextInput | null>(null)
	const thirdRef = useRef<TextInput | null>(null)

	return (
		<View className=''>
			<CustomInput
				{...{ control, blur, focus }}
				autoComplete='name'
				autoCorrect={false}
				secure={false}
				name='name'
				placeholder="Ваше ім'я"
				returnKeyType='next'
				autoCapitalize='words'
				onSubmitEditing={() => {
					secondRef.current?.focus()
				}}
				rules={{}}
			/>
			<CustomInput
				{...{ control, blur, focus }}
				autoComplete='name-family'
				autoCorrect={false}
				secure={false}
				name='surname'
				placeholder='Фамілія'
				returnKeyType='next'
				autoCapitalize='words'
				reference={secondRef}
				onSubmitEditing={() => {
					thirdRef.current?.focus()
				}}
				rules={{}}
			/>
			<CustomInput
				{...{ control, blur, focus }}
				autoComplete='tel'
				autoCorrect={false}
				secure={false}
				name='phone'
				placeholder='Номер телефону'
				returnKeyType='done'
				autoCapitalize='none'
				reference={thirdRef}
				onSubmitEditing={handleSubmit(onSubmit)}
				rules={{}}
			/>
		</View>
	)
}

export default Fields
