import { BottomSheetHandleProps } from '@gorhom/bottom-sheet'
import React, { useMemo } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useDerivedValue
} from 'react-native-reanimated'
import { toRad } from 'react-native-redash'

import { Colors } from '@/constants'

// @ts-ignore
export const transformOrigin = ({ x, y }, ...transformations) => {
	'worklet'
	return [
		{ translateX: x },
		{ translateY: y },
		...transformations,
		{ translateX: x * -1 },
		{ translateY: y * -1 }
	]
}

interface HandleProps extends BottomSheetHandleProps {
	style?: StyleProp<ViewStyle>
}

const CustomHandle: React.FC<HandleProps> = ({ style, animatedIndex }) => {
	//#region animations
	const indicatorTransformOriginY = useDerivedValue(() =>
		interpolate(animatedIndex.value, [0, 1, 2], [-1, 0, 1], Extrapolate.CLAMP)
	)
	//#endregion

	//#region styles
	const containerStyle = useMemo(() => [styles.header, style], [style])
	const containerAnimatedStyle = useAnimatedStyle(() => {
		const borderTopRadius = interpolate(
			animatedIndex.value,
			[1, 2],
			[20, 0],
			Extrapolate.CLAMP
		)
		return {
			borderTopLeftRadius: borderTopRadius,
			borderTopRightRadius: borderTopRadius
		}
	})
	const leftIndicatorStyle = useMemo(
		() => ({
			...styles.indicator,
			...styles.leftIndicator
		}),
		[]
	)
	const leftIndicatorAnimatedStyle = useAnimatedStyle(() => {
		const leftIndicatorRotate = interpolate(
			animatedIndex.value,
			[0, 1, 2],
			[toRad(-30), 0, toRad(30)],
			Extrapolate.CLAMP
		)
		return {
			transform: transformOrigin(
				{ x: 0, y: indicatorTransformOriginY.value },
				{
					rotate: `${leftIndicatorRotate}rad`
				},
				{
					translateX: -10
				}
			)
		}
	})
	const rightIndicatorStyle = useMemo(
		() => ({
			...styles.indicator,
			...styles.rightIndicator
		}),
		[]
	)
	const rightIndicatorAnimatedStyle = useAnimatedStyle(() => {
		const rightIndicatorRotate = interpolate(
			animatedIndex.value,
			[0, 1, 2],
			[toRad(30), 0, toRad(-30)],
			Extrapolate.CLAMP
		)
		return {
			transform: transformOrigin(
				{ x: 0, y: indicatorTransformOriginY.value },
				{
					rotate: `${rightIndicatorRotate}rad`
				},
				{
					translateX: 10
				}
			)
		}
	})
	//#endregion

	// render
	return (
		<Animated.View
			style={[containerStyle, containerAnimatedStyle]}
			renderToHardwareTextureAndroid={true}
		>
			<Animated.View style={[leftIndicatorStyle, leftIndicatorAnimatedStyle]} />
			<Animated.View
				style={[rightIndicatorStyle, rightIndicatorAnimatedStyle]}
			/>
		</Animated.View>
	)
}

export default CustomHandle

const styles = StyleSheet.create({
	header: {
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -15
		// paddingVertical: 14
	},
	indicator: {
		position: 'absolute',
		width: 20,
		height: 4,
		backgroundColor: Colors.PRIMARY_RED
	},
	leftIndicator: {
		borderTopStartRadius: 4,
		borderBottomStartRadius: 4
	},
	rightIndicator: {
		borderTopEndRadius: 4,
		borderBottomEndRadius: 4
	}
})
