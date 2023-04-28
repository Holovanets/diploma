import cn from 'clsx'
import { FC } from 'react'
import { Text, View } from 'react-native'

interface ICategories {
	name: string
	isActive: boolean
	selectCategory: (category: any) => void
}

const CategoryListItem: FC<ICategories> = ({
	name,
	isActive,
	selectCategory
}) => {
	return (
		<View className='bg-price px-3 h-12 justify-center overflow-visible'>
			<Text
				className={cn(
					'',
					isActive ? 'text-black font-bold' : 'text-black/30 font-semibold'
				)}
				onPress={() => selectCategory(name)}
			>
				{name}
			</Text>
		</View>
	)
}

export default CategoryListItem
