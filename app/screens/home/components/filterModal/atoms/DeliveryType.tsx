import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import { deliveryTypes } from '../../data'

import CategoryButton from './CategoryButton'

interface ITypes {
	deliveryTypes: string[]
	selectedDevType: string
	setSelectedDevType: (selectedDevType: string) => void
}

const DeliveryType: FC<ITypes> = ({
	deliveryTypes,
	selectedDevType,
	setSelectedDevType
}) => {
	return (
		<View className='my-4'>
			<Text className='text-white font-bold text-2xl'>Я хочу</Text>
			<View className='flex-row flex-wrap mt-3'>
				{deliveryTypes.map((text, i) => {
					return (
						<CategoryButton
							isSelected={text === selectedDevType}
							text={text}
							key={i}
							callback={text => setSelectedDevType(text)}
						/>
					)
				})}
			</View>
		</View>
	)
}

export default DeliveryType
