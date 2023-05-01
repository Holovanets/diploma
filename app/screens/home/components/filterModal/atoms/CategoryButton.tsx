import cn from 'clsx'
import { FC } from 'react'
import { Text, View } from 'react-native'

interface IC {
	text: string
	isSelected: boolean
}

const CategoryButton: FC<IC> = ({ text, isSelected }) => {
	return (
		<View
			className={cn(
				'px-4 py-3 rounded-2xl m-2',
				isSelected ? 'bg-accentRed' : 'bg-white/20 '
			)}
		>
			<Text className='text-white'>{text}</Text>
		</View>
	)
}

export default CategoryButton
