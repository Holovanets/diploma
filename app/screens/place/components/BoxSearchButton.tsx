import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface GoBackProps {
	callback: () => void
}

const BoxSearchButton: FC<GoBackProps> = ({ callback }) => {
	return (
		<View className='rounded-2xl justify-center  overflow-hidden w-12 h-12 bg-black/50 ml-4'>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				className='items-center justify-center content-center w-12 h-12'
				onPress={callback}
			>
				<Octicons name='search' size={26} color={Colors.PRIMARY_RED} />
			</Pressable>
		</View>
	)
}

export default BoxSearchButton
