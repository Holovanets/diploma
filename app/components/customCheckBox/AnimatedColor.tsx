import { FC, memo, useEffect } from 'react'
import Animated, {
	createAnimatedPropAdapter,
	interpolateColor,
	processColor,
	useAnimatedProps,
	useAnimatedStyle
} from 'react-native-reanimated'
import { Path } from 'react-native-svg'

import { Colors } from '@/constants'

interface AnimatedColorProps {
	progress: Readonly<Animated.SharedValue<0 | 1>>
}

const AnimatedColor: FC<AnimatedColorProps> = memo(props => {
	const { progress } = props
	const AnimationColor = Animated.createAnimatedComponent(Path)
	// const animation = useAnimatedProps(() => {
	// 	return {
	// 		stroke: 'rgb(255,0,0)',
	// 		fill: 'yellow'
	// 	}
	// const fill = interpolateColor(
	// 	progress.value,
	// 	[0, 1],
	// 	['red', 'blue'],
	// 	'HSV'
	// )
	// const stroke = interpolateColor(
	// 	progress.value,
	// 	[0, 1],
	// 	['#FFA901', '#D9D9D9'],
	// 	'RGB'
	// )
	// return { fill:{payload: processColor()} processColor(fill), stroke: processColor(stroke) }
	// }, ['fill', 'stroke'])

	const ellipseAnimatedProps = useAnimatedProps(
		() => {
			const fill = interpolateColor(
				progress.value,
				[0, 1],
				[processColor('rgba(0,0,0,0)'), processColor(Colors.PRIMARY_RED)],
				'RGB'
			)
			const stroke = interpolateColor(
				progress.value,
				[0, 1],
				[processColor(Colors.M_WHITE), processColor(Colors.PRIMARY_RED)],
				'RGB'
			)

			return {
				stroke,
				fill
			}
		},
		[],
		createAnimatedPropAdapter(
			props => {
				if (Object.keys(props).includes('fill')) {
					props.fill = { type: 0, payload: processColor(props.fill) }
				}
				if (Object.keys(props).includes('stroke')) {
					props.stroke = { type: 0, payload: processColor(props.stroke) }
				}
			},
			['fill', 'stroke']
		)
	)

	return (
		<AnimationColor
			animatedProps={ellipseAnimatedProps}
			d='M27 2H22C10.9543 2 2 10.9543 2 22V27C2 38.0457 10.9543 47 22 47H27C38.0457 47 47 38.0457 47 27V22C47 10.9543 38.0457 2 27 2Z'
			strokeWidth={4}
		/>
	)
})

export default AnimatedColor
