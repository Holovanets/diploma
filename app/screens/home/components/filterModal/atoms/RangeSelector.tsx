import { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler'
import Animated, {
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue
} from 'react-native-reanimated'

import SliderHandle from './SliderHandle'

interface ISelector {
	minRange: number
	maxRange: number
	MAX_RANGE: number
	MIN_RANGE: number
	onStartRangeChange: (value: number) => void
	onEndRangeChange: (value: number) => void
}

const RangeSelector: FC<ISelector> = ({
	minRange,
	maxRange,
	MAX_RANGE,
	MIN_RANGE,
	onStartRangeChange,
	onEndRangeChange
}) => {
	const [barWidth, setBarWidth] = useState(0)

	const leftHandlePos = useSharedValue(0)
	const rightHandlePos = useSharedValue(0)

	const startHandleGesture = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		{
			prevPos: number
		}
	>({
		onStart(event, context) {
			context.prevPos = leftHandlePos.value
		},
		onActive(event, context) {
			leftHandlePos.value = Math.min(
				rightHandlePos.value - 48,
				Math.max(0, context.prevPos + event.translationX)
			)
			runOnJS(onStartRangeChange)(
				Math.round((MAX_RANGE / barWidth) * leftHandlePos.value)
			)
		}
	})
	const endHandleGesture = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		{
			prevPos: number
		}
	>({
		onStart(event, context) {
			context.prevPos = rightHandlePos.value
		},
		onActive(event, context) {
			rightHandlePos.value = Math.min(
				barWidth,
				Math.max(leftHandlePos.value + 48, context.prevPos + event.translationX)
			)
			runOnJS(onEndRangeChange)(
				Math.round((MAX_RANGE / barWidth) * rightHandlePos.value)
			)
		}
	})
	const leftHandleStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: leftHandlePos.value }]
	}))
	const rightHandleStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: rightHandlePos.value }]
	}))

	const barHighlightStyle = useAnimatedStyle(() => ({
		left: leftHandlePos.value,
		right: barWidth - rightHandlePos.value
	}))

	useEffect(() => {
		if (barWidth === 0) return
		leftHandlePos.value = (minRange * barWidth) / MAX_RANGE
		rightHandlePos.value = (maxRange * barWidth) / MAX_RANGE
	}, [barWidth])
	return (
		<View>
			<Text className='text-white font-bold text-2xl mb-4'>Відстань (км)</Text>
			<View
				className='h-3  bg-accentRed/10 mt-4 rounded-full mx-2'
				style={{ position: 'relative' }}
				onLayout={event => {
					setBarWidth(event.nativeEvent.layout.width)
				}}
			>
				<Animated.View
					style={[
						barHighlightStyle,
						{
							position: 'absolute'
						}
					]}
					className='bg-accentRed h-3'
				/>
				<PanGestureHandler onGestureEvent={startHandleGesture}>
					<Animated.View
						style={[
							leftHandleStyle,
							{
								position: 'absolute'
							}
						]}
					>
						<SliderHandle count={minRange} max={MAX_RANGE} />
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={endHandleGesture}>
					<Animated.View
						style={[
							rightHandleStyle,
							{
								position: 'absolute'
							}
						]}
					>
						<SliderHandle count={maxRange} max={MAX_RANGE} />
					</Animated.View>
				</PanGestureHandler>
			</View>

			{/* <View className='flex-row justify-between items-center mt-5'>
				<Text className='text-white '>{MIN_RANGE}</Text>
				<Text className='text-white '>{MAX_RANGE}</Text>
			</View> */}
		</View>
	)
}

export default RangeSelector
