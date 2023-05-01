import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface GoBackProps {
	callback: () => void
}

const CloseButton: FC<GoBackProps> = ({ callback }) => {
	return (
		<View className='rounded-2xl justify-center  overflow-hidden w-14 h-14 bg-accentRed/20 '>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				className='items-center justify-center content-center w-14 h-14'
				onPress={callback}
			>
				<Octicons name='x' size={36} color='rgba(255,0,0, 1)' />
			</Pressable>
		</View>
	)
}

export default CloseButton
