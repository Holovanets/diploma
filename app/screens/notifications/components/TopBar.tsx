import { FC } from 'react'
import { Animated, Text, View } from 'react-native'

import { GoBackButton } from '@/components'
import { Colors } from '@/constants'
import { ScreenProps } from '@/types'

interface ITopBar extends ScreenProps {
	scrollY: Animated.Value
}

const TopBar: FC<ITopBar> = ({ navigation, scrollY }) => {
	return (
		<View
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0
			}}
			className='justify-between items-center px-7 pt-10 flex-row'
		>
			<Animated.View
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					left: 0,
					bottom: 0,
					height: 100,
					backgroundColor: Colors.M_DARK,
					opacity: scrollY.interpolate({
						inputRange: [10, 40],
						outputRange: [0, 1]
					})
				}}
			/>
			<View className='justify-left'>
				<GoBackButton callback={navigation.goBack} />
			</View>
			<Text className='text-white text-3xl font-bold'>Повідомлення</Text>
		</View>
	)
}

export default TopBar
