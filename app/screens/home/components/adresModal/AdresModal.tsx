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

import { CloseButton, CustomBackdrop, CustomBackground } from '@/components'
import { Colors } from '@/constants'

interface IModal {
	reference: RefObject<BottomSheetModal>
}

const AdresModal: FC<IModal> = ({ reference }) => {
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
				<View></View>
			</BottomSheetScrollView>
		</BottomSheetModal>
	)
}

export default AdresModal
