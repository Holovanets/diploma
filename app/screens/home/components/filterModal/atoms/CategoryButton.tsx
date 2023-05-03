import cn from 'clsx'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

interface IC {
	text: string
	isSelected: boolean
	callback: (text: string) => void
}

const CategoryButton: FC<IC> = ({ text, callback, isSelected }) => {
	return (
		<View className='rounded-2xl  m-2 overflow-hidden'>
			<Pressable
				android_ripple={{ color: 'rgba(255,0,0,0.8)' }}
				onPress={() => callback(text)}
				className={cn(
					'px-4 py-3',
					isSelected ? 'bg-accentRed' : 'bg-white/20 '
				)}
			>
				<Text className='text-white'>{text}</Text>
			</Pressable>
		</View>
	)
}

export default CategoryButton
