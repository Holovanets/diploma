import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface GoBackProps {
	callback: () => void
}

const BoxLocButton: FC<GoBackProps> = ({ callback }) => {
	return (
		<View className='rounded-2xl justify-center  overflow-hidden w-12 h-12 bg-accentRed/20 '>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				className='items-center justify-center content-center w-12 h-12'
				onPress={callback}
			>
				<Octicons name='location' size={26} color={Colors.PRIMARY_RED} />
			</Pressable>
		</View>
	)
}

export default BoxLocButton
