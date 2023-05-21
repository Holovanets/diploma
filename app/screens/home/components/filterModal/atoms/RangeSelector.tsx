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
	maxRange: number
	MAX_RANGE: number
	MIN_RANGE: number
	onEndRangeChange: (value: number) => void
}

const RangeSelector: FC<ISelector> = ({
	maxRange,
	MAX_RANGE,
	MIN_RANGE,
	onEndRangeChange
}) => {
	const [barWidth, setBarWidth] = useState(0)

	const rightHandlePos = useSharedValue(0)

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
				Math.max(MIN_RANGE, context.prevPos + event.translationX)
			)
			runOnJS(onEndRangeChange)(
				Math.round((MAX_RANGE / barWidth) * rightHandlePos.value)
			)
		}
	})
	const rightHandleStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: rightHandlePos.value }]
	}))

	const barHighlightStyle = useAnimatedStyle(() => ({
		left: MIN_RANGE,
		right: barWidth - rightHandlePos.value
	}))

	useEffect(() => {
		if (barWidth === 0) return
		rightHandlePos.value = (maxRange * barWidth) / MAX_RANGE
	}, [barWidth])
	return (
		<View>
			<Text className='text-white font-bold text-2xl mb-4'>Радіус (км)</Text>
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
					className='bg-accentRed h-3 rounded-full'
				/>
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
		</View>
	)
}

export default RangeSelector
