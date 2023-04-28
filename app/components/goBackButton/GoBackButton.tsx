import { Octicons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface GoBackProps {
	callback: () => void
	dark?: boolean
}

const GoBackButton: FC<GoBackProps> = ({ callback, dark }) => {
	return (
		<View
			className={cn(
				'rounded-2xl justify-center  overflow-hidden w-12 h-12 ',
				!!dark ? 'bg-black/50' : 'bg-accentRed/20'
			)}
		>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				className='items-center justify-center content-center w-12 h-12'
				onPress={callback}
			>
				<Octicons name='chevron-left' size={32} color={Colors.PRIMARY_RED} />
			</Pressable>
		</View>
	)
}

export default GoBackButton
