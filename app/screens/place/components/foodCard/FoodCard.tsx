import { Octicons } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface ICard {
	Id: number
	Category: string
	Name: string
	Cost: number
	Discount: number
	Link: string
	Description: string
}

const FoodCard: FC<ICard> = ({
	Id,
	Category,
	Name,
	Cost,
	Discount,
	Link,
	Description
}) => {
	const [itemCount, setItemCount] = useState(0)

	return (
		<View
			className='my-2 rounded-3xl bg-white/5 mx-2 overflow-hidden'
			// style={{ elevation: 2 }}
		>
			<Pressable
				className='flex-row items-center'
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
			>
				<View>
					<Image
						className='h-32 w-32 '
						source={{ uri: Link }}
						// resizeMethod='scale'
						resizeMode='cover'
						resizeMethod='scale'
					/>
				</View>
				<View className='mx-5 overflow-hidden'>
					<View>
						<Text
							numberOfLines={1}
							className='text-white text-lg w-52 font-bold'
						>
							{Name}
						</Text>
						<Text
							numberOfLines={2}
							className='text-white/60 font-semibold leading-4 w-52 mb-4'
						>
							{Description}
						</Text>
					</View>
					<View className='flex-row items-center justify-between mx-1.5'>
						<Text className='text-price text-lg font-extrabold'>$ {Cost}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	)
}

export default FoodCard
