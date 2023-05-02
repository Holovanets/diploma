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

import { deliveryTypes } from '../data'

import {
	BottomButton,
	CategoryButton,
	RangeSelector,
	SliderHandle
} from './atoms'
import { CloseButton, CustomBackdrop, CustomBackground } from '@/components'
import { Colors } from '@/constants'

interface IModal {
	reference: RefObject<BottomSheetModal>
}
const MIN_RANGE = 0
const MAX_RANGE = 99

const FilterModal: FC<IModal> = ({ reference }) => {
	const [minRange, setMinRange] = useState(20)
	const [maxRange, setMaxRange] = useState(50)

	const handleClosePress = () => reference?.current?.close()
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
							{...{ MIN_RANGE, MAX_RANGE, maxRange, minRange }}
							onStartRangeChange={setMinRange}
							onEndRangeChange={setMaxRange}
						/>
					</View>
					<View className='my-4'>
						<Text className='text-white font-bold text-2xl'>Я хочу</Text>
						<View className='flex-row flex-wrap mt-3'>
							{deliveryTypes.map((text, i) => {
								const isSelected = i === 0
								return (
									<CategoryButton {...{ isSelected }} text={text} key={i} />
								)
							})}
						</View>
					</View>
				</View>
			</BottomSheetScrollView>
			<BottomButton callback={handleClosePress} />
		</BottomSheetModal>
	)
}

export default FilterModal
