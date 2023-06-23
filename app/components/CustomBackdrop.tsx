import {
	BottomSheetBackdropProps,
	BottomSheetModal
} from '@gorhom/bottom-sheet'
import React, { RefObject, useMemo } from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle
} from 'react-native-reanimated'

import { Colors } from '@/constants'

interface IBackdrop extends BottomSheetBackdropProps {
	reference?: RefObject<BottomSheetModal>
}

const CustomBackdrop = ({ animatedIndex, style, reference }: IBackdrop) => {
	// animated variables
	const containerAnimatedStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			animatedIndex.value,
			[-1, 0],
			[0, 0.6],
			Extrapolate.CLAMP
		)
	}))

	// styles
	const containerStyle = useMemo(
		() => [
			style,
			{
				backgroundColor: Colors.M_DARK
			},
			containerAnimatedStyle
		],
		[style, containerAnimatedStyle]
	)

	return (
		<Animated.View style={containerStyle}>
			<Pressable
				onPress={() => reference?.current?.close()}
				// onPress={() => console.log('Backdrop pressed')}
				className='flex-1'
			></Pressable>
		</Animated.View>
	)
}

export default CustomBackdrop
