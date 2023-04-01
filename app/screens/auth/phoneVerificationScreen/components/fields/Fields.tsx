import { FC, useRef, useState } from 'react'
import { Text, TextInput, View } from 'react-native'

interface FieldsProps {
	otp: {
		1: string
		2: string
		3: string
		4: string
	}
	setOtp: (otp: { 1: string; 2: string; 3: string; 4: string }) => void
}

const Fields: FC<FieldsProps> = ({ otp, setOtp }) => {
	const firstRef = useRef<TextInput | null>(null)
	const secondRef = useRef<TextInput | null>(null)
	const thirdRef = useRef<TextInput | null>(null)
	const fourthRef = useRef<TextInput | null>(null)

	return (
		<View className='mx-4 mb-4 justify-evenly items-center flex-row'>
			<View className='rounded-3xl mx-5 border-2 border-accentRed'>
				<TextInput
					className='text-4xl font-bold text-white text-center px-5 py-1.5 pb-2'
					keyboardType='number-pad'
					maxLength={1}
					ref={firstRef}
					onChangeText={text => {
						setOtp({ ...otp, 1: text })
						text && secondRef.current?.focus()
					}}
				/>
			</View>
			<View className='rounded-3xl mx-5 border-2 border-accentRed'>
				<TextInput
					className='text-4xl font-bold text-white text-center px-5 py-1.5 pb-2'
					keyboardType='number-pad'
					maxLength={1}
					ref={secondRef}
					onChangeText={text => {
						setOtp({ ...otp, 2: text })
						text ? thirdRef.current?.focus() : firstRef.current?.focus()
					}}
				/>
			</View>
			<View className='rounded-3xl mx-5 border-2 border-accentRed'>
				<TextInput
					className='text-4xl font-bold text-white text-center px-5 py-1.5 pb-2'
					keyboardType='number-pad'
					maxLength={1}
					ref={thirdRef}
					onChangeText={text => {
						setOtp({ ...otp, 3: text })
						text ? fourthRef.current?.focus() : secondRef.current?.focus()
					}}
				/>
			</View>
			<View className='rounded-3xl mx-5 border-2 border-accentRed'>
				<TextInput
					className='text-4xl font-bold text-white text-center px-5 py-1.5 pb-2'
					keyboardType='number-pad'
					maxLength={1}
					ref={fourthRef}
					onChangeText={text => {
						setOtp({ ...otp, 4: text })
						!text && thirdRef.current?.focus()
					}}
				/>
			</View>
		</View>
	)
}

export default Fields
