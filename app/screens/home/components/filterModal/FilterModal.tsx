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

import { CategoryButton, SliderHandle } from './atoms'
import { CloseButton, CustomBackdrop, CustomBackground } from '@/components'
import { Colors } from '@/constants'

interface IModal {
	reference: RefObject<BottomSheetModal>
}
const MIN_RANGE = 50
const MAX_RANGE = 500

const FilterModal: FC<IModal> = ({ reference }) => {
	const [minRange, setMinRange] = useState(50)
	const [maxRange, setMaxRange] = useState(250)

	const handleClosePress = () => reference?.current?.close()
	return (
		<BottomSheetModal
			backdropComponent={props => <CustomBackdrop {...props} />}
			backgroundComponent={props => <CustomBackground {...props} />}
			snapPoints={['75%', '95%']}
			index={0}
			ref={reference}
		>
			<BottomSheetScrollView>
				<View className='mx-6'>
					<View className=' flex-row justify-between items-center'>
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
						<Text className='text-white font-bold text-2xl'>Відстань</Text>
						<View
							className='h-1 w-full bg-white/10 mt-4'
							style={{ position: 'relative' }}
						>
							<View
								style={{
									position: 'absolute',
									left: `${(100 * minRange) / MAX_RANGE}%`,
									width: `${(100 * (maxRange - minRange)) / MAX_RANGE}%`
								}}
								className='bg-white h-1'
							/>
							<View
								style={{
									position: 'absolute',
									left: '10%'
								}}
							>
								<SliderHandle />
							</View>
							<View
								style={{
									position: 'absolute',
									left: '50%'
								}}
							>
								<SliderHandle />
							</View>
						</View>

						<View className='flex-row justify-between items-center mt-1'>
							<Text className='text-white '>{MIN_RANGE}</Text>
							<Text className='text-white '>{MAX_RANGE}</Text>
						</View>
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
			<Pressable className='bg-accentRed justify-center items-center align-center h-16 flex-row rounded-xl'>
				<Text className='text-white text-xl font-bold'>Додати</Text>
				<View
					className='bg-mDark w-10 h-10 items-center justify-center rounded-xl'
					style={{
						position: 'absolute',
						right: 24,
						top: 12,
						bottom: 12
					}}
				>
					<Octicons name='arrow-right' color='white' size={24} />
				</View>
			</Pressable>
		</BottomSheetModal>
	)
}

export default FilterModal
