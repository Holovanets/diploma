import { FC, memo, useEffect } from 'react'
import Animated, {
	interpolateColor,
	useAnimatedProps
} from 'react-native-reanimated'
import { Path } from 'react-native-svg'

import { Colors } from '@/constants'

interface AnimatedColorProps {
	progress: Readonly<Animated.SharedValue<0 | 1>>
}

const AnimatedColor: FC<AnimatedColorProps> = memo(props => {
	const { progress } = props
	console.log('AA')
	const AnimationColor = Animated.createAnimatedComponent(Path)

	const animation = useAnimatedProps(() => {
		const fill = interpolateColor(progress.value, [0, 1], ['#036430', '#fff'])
		const stroke = interpolateColor(
			progress.value,
			[0, 1],
			['#f00', '#fff'],
			'RGB'
		)
		return { fill, stroke }
	})

	useEffect(() => {
		console.log(animation.fill)
	}, [progress.value])

	return (
		<AnimationColor
			animatedProps={animation}
			d='M27 2H22C10.9543 2 2 10.9543 2 22V27C2 38.0457 10.9543 47 22 47H27C38.0457 47 47 38.0457 47 27V22C47 10.9543 38.0457 2 27 2Z'
			strokeWidth='4'
		/>
	)
})

export default AnimatedColor
