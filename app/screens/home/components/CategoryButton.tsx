import cn from 'clsx'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

interface IButton {
	title: string
	isActive: boolean
	selectCategory: (category: any) => void
}

const CategoryButton: FC<IButton> = ({ title, isActive, selectCategory }) => {
	return (
		<View
			className={cn(
				'rounded-full overflow-hidden mr-2',
				isActive ? 'bg-accentRed' : ''
			)}
		>
			<Pressable
				onPress={() => selectCategory(title)}
				className='px-3 py-2'
				android_ripple={{ color: 'rgba(255,125,125,0.3)' }}
			>
				<Text
					className={cn(
						'font-bold text-base',
						isActive ? 'text-white' : 'text-white/50'
					)}
				>
					{title}
				</Text>
			</Pressable>
		</View>
	)
}

export default CategoryButton
