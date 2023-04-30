import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

interface ICategories {
	name: string
	isActive: boolean
	selectCategory: (category: any) => void
}

const CategoryRenderItem: FC<ICategories> = ({
	name,
	isActive,
	selectCategory
}) => {
	return (
		<Pressable onPress={selectCategory} className='mx-4'>
			<Text className='text-white'>{name}</Text>
		</Pressable>
	)
}

export default CategoryRenderItem
