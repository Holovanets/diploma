import { Octicons } from '@expo/vector-icons'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { FC, RefObject, useState } from 'react'
import {
	Image,
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	View
} from 'react-native'

import { deliveryTypes, restTypes } from '../data'

import {
	BottomButton,
	CategoryButton,
	DeliveryType,
	PlaceType,
	RangeSelector,
	SliderHandle
} from './atoms'
import { CloseButton, CustomBackdrop, CustomBackground } from '@/components'
import { Colors } from '@/constants'

interface IModal {
	reference: RefObject<BottomSheetModal>
}
const MIN_RANGE = 0
const MAX_RANGE = 50

const FilterModal: FC<IModal> = ({ reference }) => {
	const [maxRange, setMaxRange] = useState(10)

	const handleClosePress = () => reference?.current?.close()
	const [selectedDevType, setSelectedDevType] = useState(deliveryTypes[0])
	const [selectedPlaceType, setSelectedPlaceType] = useState([])
	// const [allFilters, setAllFilters] = useState([selectedDevType])
	const allFilters = [selectedDevType, ...selectedPlaceType]
	return (
		<BottomSheetModal
			backdropComponent={props => <CustomBackdrop {...props} />}
			backgroundComponent={props => <CustomBackground {...props} />}
			snapPoints={['90%']}
			handleStyle={{
				backgroundColor: '#191918',
				borderTopLeftRadius: 12,
				borderTopRightRadius: 12
			}}
			handleIndicatorStyle={{ backgroundColor: Colors.PRIMARY_RED }}
			index={0}
			ref={reference}
		>
			<BottomSheetScrollView>
				<View className='mx-6'>
					<View className='mt-4 flex-row justify-between items-center'>
						<View className='flex-row flex-1 rounded-2xl w-14 h-14 items-center py-3 px-4 my-2 bg-white/10 z-0'>
							<View className='mr-4 mt-0.5 justify-center'>
								<Octicons name='search' size={24} color='white' />
							</View>
							<TextInput
								placeholder='Пошук по всім закладам'
								className='text-white text-base flex-1'
								placeholderTextColor='rgba(255,255,255, 0.5)'
							/>
						</View>
						<View className='ml-2 flex-end'>
							<CloseButton callback={handleClosePress} />
						</View>
					</View>
					<View className='my-4'>
						<RangeSelector
							{...{ MIN_RANGE, MAX_RANGE, maxRange }}
							onEndRangeChange={setMaxRange}
						/>
					</View>
					<DeliveryType
						{...{ deliveryTypes, selectedDevType }}
						setSelectedDevType={selectedDevType =>
							setSelectedDevType(selectedDevType)
						}
					/>
					<PlaceType
						{...{ restTypes, selectedPlaceType }}
						setSelectedPlaceType={selectedPlaceType =>
							//@ts-ignore
							setSelectedPlaceType(selectedPlaceType)
						}
					/>
				</View>
			</BottomSheetScrollView>
			<BottomButton
				callback={() => console.log(allFilters)}
				count={allFilters.length + 1}
			/>
		</BottomSheetModal>
	)
}

export default FilterModal
