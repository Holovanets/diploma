import { FC, useRef, useState } from 'react'
import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native'

import FlagItem from './FlagItem'
import { CustomInput, PhoneInput } from '@/components'
import { CountryCode } from '@/constants'
import { validEmail, validPassword, validUsername } from '@/regex'
import { IAdditionalFields, IBaseFields } from '@/types'

interface FieldsProps {
	control: Control<IAdditionalFields | any>
	onSubmit: SubmitHandler<IAdditionalFields>
	handleSubmit: UseFormHandleSubmit<any>
	focus?: () => void
	blur?: () => void
}
const getDropdownStyle = (y: number) => ({ bottom: y + 50 })
const Fields: FC<FieldsProps> = ({
	control,
	onSubmit,
	handleSubmit,
	focus,
	blur
}) => {
	const secondRef = useRef<TextInput | null>(null)
	const thirdRef = useRef<TextInput | null>(null)

	const [selectedCountry, setSelelctedCountry] = useState(
		CountryCode.find(country => country.name === 'Ukraine')
	)
	const [inputsContainerY, setInputsConteinerY] = useState(0)
	const [isDropDownOpen, setIsDropDownOpen] = useState(false)
	const [dropDowLayout, setDropDownLayout] = useState({})

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
			<PhoneInput
				{...{
					control,
					blur,
					focus,
					selectedCountry,
					setInputsConteinerY,
					setIsDropDownOpen,
					isDropDownOpen
				}}
				autoComplete='tel'
				name='phone'
				placeholder='Номер телефону'
				returnKeyType='done'
				reference={thirdRef}
				onSubmitEditing={handleSubmit(onSubmit)}
				rules={{}}
			/>
			{isDropDownOpen && (
				<View
					className='bg-black/70 w-72 h-40 absolute ml-8 rounded-xl overflow-hidden'
					style={getDropdownStyle(inputsContainerY)}
					onLayout={({
						nativeEvent: {
							layout: { x, y, height, width }
						}
					}) => setDropDownLayout({ x, y, height, width })}
				>
					{/* TODO Swap FlatList to FlashList */}
					<FlatList
						data={CountryCode}
						keyExtractor={item => item.code}
						renderItem={({ item }) => (
							<FlagItem
								{...item}
								callback={country => {
									setSelelctedCountry(country)
									setIsDropDownOpen(false)
								}}
							/>
						)}
					/>
				</View>
			)}
		</View>
	)
}

export default Fields
