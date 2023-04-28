import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface IInfoButton {
	icon: keyof typeof Octicons.glyphMap | any
	text: string
}

const InfoButton: FC<IInfoButton> = ({ icon, text }) => {
	return (
		<View className='mr-2'>
			<View className='bg-black flex-row w-8 z-10 rounded-3xl px-1 py-1 items-center justify-center'>
				<Octicons name={icon} size={22} color={Colors.PRICE} className='z-20' />
			</View>
			<View className='rounded-xl overflow-hidden  ml-3 -mt-2'>
				<Pressable
					onPress={() => {
						console.log(`pressed ${text}`)
					}}
					className='rounded-xl px-5 py-3 bg-black/80'
					android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				>
					<Text className='text-white font-medium'>{text}</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default InfoButton
