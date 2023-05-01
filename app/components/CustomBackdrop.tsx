import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import React, { useMemo } from 'react'
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle
} from 'react-native-reanimated'

import { Colors } from '@/constants'

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
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

	return <Animated.View style={containerStyle} />
}

export default CustomBackdrop
