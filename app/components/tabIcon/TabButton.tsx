import { Ionicons } from '@expo/vector-icons'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface ITab extends BottomTabBarButtonProps {
	focused: boolean
	icon: keyof typeof Ionicons.glyphMap
	icon_filled: keyof typeof Ionicons.glyphMap
}
const TabButton: FC<ITab> = ({ focused, icon, icon_filled, to }) => {
	return (
		<View className='rounded-full overflow-hidden'>
			<Pressable
				android_ripple={{ color: 'rgba(255,50,50,0.7)' }}
				className='items-center content-center justify-center rounded-full'
				style={{ height: 48, width: 48 }}
			>
				<Ionicons
					name={focused ? icon_filled : icon}
					size={24}
					color={focused ? Colors.PRIMARY_RED : '#aaa'}
				/>
				{/* {focused && (
					<View
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
				)} */}
			</Pressable>
		</View>
	)
}

export default TabButton
