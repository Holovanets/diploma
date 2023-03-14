import { FC, memo, useEffect, useRef, useState } from 'react'
import Animated, {
	interpolateColor,
	useAnimatedProps,
	useAnimatedStyle
} from 'react-native-reanimated'
import { Path } from 'react-native-svg'

import { Colors } from '@/constants'

interface AnimatedColorProps {
	progress: Readonly<Animated.SharedValue<0 | 1>>
}

const AnimatedCheckMarkPath: FC<AnimatedColorProps> = memo(props => {
	const { progress } = props

	const [length, setLength] = useState(0)
	const pathRef = useRef<any>(null)

	const AnimatedPath = Animated.createAnimatedComponent(Path)
	const checkMarkAnimation = useAnimatedProps(() => {
		const strokeDashoffset = length - length * progress.value
		const opacity = progress.value
		return { strokeDashoffset, opacity }
	})
	return (
		<AnimatedPath
			animatedProps={checkMarkAnimation}
			onLayout={() => setLength(pathRef.current?.getTotalLength())}
			ref={pathRef}
			d='M12 24.4068L20.6667 32.9999L36.5 17.1667'
			stroke='white'
			strokeWidth='5'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeDasharray={length}
		/>
	)
})

export default AnimatedCheckMarkPath
