import { Feather, Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'

import { Colors } from '@/constants'

interface ITab {
	focused: boolean
	icon: keyof typeof Ionicons.glyphMap
	icon_filled: keyof typeof Ionicons.glyphMap
}

const TabIcon: FC<ITab> = ({ focused, icon, icon_filled }) => {
	return (
		<View
			className='items-center content-center justify-center rounded-full'
			style={{ height: 48, width: 40 }}
		>
			<Ionicons
				name={focused ? icon_filled : icon}
				size={24}
				color={focused ? Colors.PRIMARY_RED : '#aaa'}
			/>
			{focused && (
				<Animated.View
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 0,
						height: 5,
						borderTopLeftRadius: 5,
						borderTopRightRadius: 5,
						backgroundColor: Colors.PRIMARY_RED
					}}
				/>
			)}
		</View>
	)
}

export default TabIcon
