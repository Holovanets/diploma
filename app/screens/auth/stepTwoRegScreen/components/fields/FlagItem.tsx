import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { StaticImageService } from '@/providers'

interface FlagItemProps {
	name: string
	dial_code: string | null
	code: string
	callback: (country: {
		name: string
		dial_code: string | null
		code: string
	}) => void
}

const FlagItem: FC<FlagItemProps> = ({ name, dial_code, code, callback }) => {
	return (
		<Pressable
			className='flex-row align-center items-center px-6'
			android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
			onPress={() => callback({ code, name, dial_code })}
		>
			<Image
				source={{ uri: StaticImageService.getFlagIcon(code) }}
				className='h-4 w-4 mr-2'
			/>
			<Text className='text-white text-lg'>{dial_code}</Text>
			<Text className='text-white text-lg ml-2'>{name}</Text>
		</Pressable>
	)
}

export default FlagItem
