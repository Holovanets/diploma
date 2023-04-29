import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { Colors } from '@/constants'

interface ITab {
	focused: boolean
	icon: keyof typeof Feather.glyphMap
}

const TabIcon: FC<ITab> = ({ focused, icon }) => {
	return (
		<View
			className='items-center content-center justify-center'
			style={{ height: 48, width: 40 }}
		>
			<Feather
				name={icon}
				size={24}
				color={focused ? Colors.PRIMARY_RED : 'white'}
			/>
			{focused && (
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
			)}
		</View>
	)
}

export default TabIcon
