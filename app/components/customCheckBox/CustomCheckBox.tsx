import { FC, memo, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDerivedValue, withTiming } from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'

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
		<Svg
			className='w-7 h-7'
			viewBox='0 0 49 49'
			fill='none'
			// @ts-ignore
			xmlns='http://www.w3.org/2000/svg'
		>
			<AnimatedColor progress={progress} />
			<Path
				d='M13 24.2402L21.6667 32.8333L37.5 17'
				stroke='white'
				strokeWidth='5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	)
})

export default CustomCheckBox
