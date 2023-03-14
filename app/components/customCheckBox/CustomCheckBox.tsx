import { FC, memo, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDerivedValue, withTiming } from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'

import AnimatedCheckMarkPath from './AnimatedCheckMarkPath'
import AnimatedColor from './AnimatedColor'

interface CustomCheckBoxProps {
	checked: boolean
}

const CustomCheckBox: FC<CustomCheckBoxProps> = memo(props => {
	const { checked } = props
	const progress = useDerivedValue(() => {
		return withTiming(checked ? 1 : 0)
	})

	return (
		<Svg className='h-6 w-6' viewBox='0 0 49 49'>
			<AnimatedColor progress={progress} />
			<AnimatedCheckMarkPath progress={progress} />
		</Svg>
	)
})

export default CustomCheckBox
