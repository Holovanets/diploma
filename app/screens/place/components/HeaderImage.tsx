import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated'

// const { Extrapolate, interpolate } = Animated
const { height: wHeight, width: wWidth } = Dimensions.get('window')

// export const backgroundImage = require('./assets/background.jpeg')

export const HEADER_IMAGE_HEIGHT = wHeight / 3
const styles = StyleSheet.create({
	image: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: wWidth,
		resizeMode: 'cover'
	}
})

interface HeaderImageProps {
	y: Animated.Value<number>
	cover: string
}

export default ({ y, cover }: HeaderImageProps) => {
	// const height = interpolate(y, {
	// 	inputRange: [-100, 0],
	// 	outputRange: [HEADER_IMAGE_HEIGHT + 100, HEADER_IMAGE_HEIGHT],
	// 	extrapolateRight: Extrapolate.CLAMP
	// })
	// const top = interpolate(y, {
	// 	inputRange: [0, 100],
	// 	outputRange: [0, -100],
	// 	extrapolateLeft: Extrapolate.CLAMP
	// })
	const height = interpolate(
		y,
		[-100, 0],
		[HEADER_IMAGE_HEIGHT + 100, HEADER_IMAGE_HEIGHT],
		{ extrapolateRight: Extrapolate.CLAMP }
	)
	const top = interpolate(y, [0, 100], [0, -100], {
		extrapolateRight: Extrapolate.CLAMP
	})
	return (
		<Animated.Image
			source={{ uri: cover }}
			style={[styles.image, { top, height }]}
		/>
	)
}
