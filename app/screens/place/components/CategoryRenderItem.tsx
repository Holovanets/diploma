import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

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
		<Pressable onPress={() => selectCategory(name)} className='mx-4'>
			<Text className='text-white mb-3'>{name}</Text>
			{isActive && (
				<View
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 0,
						height: 6,
						borderTopLeftRadius: 5,
						borderTopRightRadius: 5,
						backgroundColor: Colors.PRIMARY_RED
					}}
				/>
			)}
		</Pressable>
	)
}

export default CategoryRenderItem
