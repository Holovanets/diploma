import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet'
import React, { useMemo } from 'react'
import Animated, {
	interpolateColor,
	useAnimatedStyle
} from 'react-native-reanimated'

import { Colors } from '@/constants'

const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({
	style,
	animatedIndex
}) => {
	//#region styles
	const containerAnimatedStyle = useAnimatedStyle(() => ({
		// @ts-ignore
		backgroundColor: interpolateColor(
			animatedIndex.value,
			[-1, 0],
			['#000', Colors.M_DARK]
		)
	}))
	const containerStyle = useMemo(
		() => [style, containerAnimatedStyle],
		[style, containerAnimatedStyle]
	)
	//#endregion

	// render
	return <Animated.View pointerEvents='none' style={containerStyle} />
}

export default CustomBackground
