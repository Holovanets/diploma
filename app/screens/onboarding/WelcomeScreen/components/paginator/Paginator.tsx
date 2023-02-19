import { FC } from 'react'
import { Animated, Text, View, useWindowDimensions } from 'react-native'

interface IPaginator {
	data: IWelcomeContent[]
	scrollX: Animated.Value
}

const Paginator: FC<IPaginator> = ({ data, scrollX }) => {
	const { width } = useWindowDimensions()
	return (
		<View className='flex-row h-8'>
			{data.map((_: IWelcomeContent, i: number) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [8, 16, 8],
					extrapolate: 'clamp'
				})
				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 1, 0.3],
					extrapolate: 'clamp'
				})
				return (
					<Animated.View
						className='h-2 rounded-full bg-accentRed mx-1'
						style={{ width: dotWidth, opacity }}
						key={i.toString()}
					></Animated.View>
				)
			})}
		</View>
	)
}

export default Paginator
