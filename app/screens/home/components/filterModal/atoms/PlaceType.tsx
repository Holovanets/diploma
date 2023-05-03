import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import { deliveryTypes } from '../../data'

import CategoryButton from './CategoryButton'

interface ITypes {
	restTypes: string[]
	selectedPlaceType: string[]
	setSelectedPlaceType: (selectedPlaceType: string[]) => void
}

const PlaceType: FC<ITypes> = ({
	restTypes,
	selectedPlaceType,
	setSelectedPlaceType
}) => {
	function pickOption(selectedOption: string) {
		if (selectedPlaceType.includes(selectedOption)) {
			setSelectedPlaceType(
				selectedPlaceType.filter(option => option !== selectedOption)
			)
			return
		}
		//@ts-ignore
		setSelectedPlaceType(selectedPlaceType =>
			selectedPlaceType.concat(selectedOption)
		)
	}
	return (
		<View className='my-4'>
			<Text className='text-white font-bold text-2xl'>Тип закладу</Text>
			<View className='flex-row flex-wrap mt-3'>
				{restTypes.map((text, i) => {
					return (
						<CategoryButton
							isSelected={selectedPlaceType.includes(text)}
							text={text}
							key={i}
							callback={() => pickOption(text)}
						/>
					)
				})}
			</View>
		</View>
	)
}

export default PlaceType
