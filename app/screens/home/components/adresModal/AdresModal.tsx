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

import Adress from './Adress'
import CustomHandle from './CustomHandle'
import Type from './Type'
import { adresa } from './adresa'
import {
	CloseButton,
	CustomBackdrop,
	CustomBackground,
	CustomCheckBox
} from '@/components'
import { Colors } from '@/constants'

interface IModal {
	reference: RefObject<BottomSheetModal>
}

const AdresModal: FC<IModal> = ({ reference }) => {
	const [type, setType] = useState([true, false])
	const [selectedAdress, setSelectedAdress] = useState(adresa[0].name)
	const handleClosePress = () => reference?.current?.close()
	return (
		<BottomSheetModal
			backdropComponent={props => (
				<CustomBackdrop {...props} {...{ reference }} />
			)}
			backgroundComponent={props => <CustomBackground {...props} />}
			snapPoints={['20%', '60%']}
			handleComponent={props => <CustomHandle {...props} />}
			backgroundStyle={{
				borderTopLeftRadius: 24,
				borderTopRightRadius: 24
			}}
			// handleIndicatorStyle={{ backgroundColor: Colors.PRIMARY_RED }}
			index={0}
			ref={reference}
		>
			<Type {...{ type, setType }} />
			<BottomSheetScrollView>
				<Text className='text-white text-2xl font-semibold mb-2 mx-4'>
					Мої адреси
				</Text>
				{adresa.map((e, index) => (
					<Adress
						key={index}
						checked={e.name === selectedAdress}
						callback={() => setSelectedAdress(e.name)}
						title={e.name}
					/>
				))}
				<Pressable
					android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
					className='flex-row items-center py-4 pl-5'
				>
					<Octicons name='plus' size={24} color='white' />
					<Text className='ml-7 text-base text-white/60'>Додати новий</Text>
				</Pressable>
			</BottomSheetScrollView>
			<View className='bg-white/5 px-4 py-4 mt-4'>
				<View className='overflow-hidden rounded-2xl'>
					<Pressable
						android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
						className='bg-cancel items-center py-3 px-3'
					>
						<Text className='text-xl text-white'>Готово</Text>
					</Pressable>
				</View>
			</View>
		</BottomSheetModal>
	)
}

export default AdresModal
