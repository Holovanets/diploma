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
			className='flex-1 flex-row my-2 items-center rounded-3xl bg-black mx-2 py-1 overflow-hidden'
			// style={{ elevation: 2 }}
		>
			<Pressable>
				<Image
					className='h-24 w-24 rounded-xl ml-4'
					source={{ uri: Link }}
					// resizeMethod='scale'
					resizeMode='cover'
				/>
			</Pressable>
			<View className='mx-5 my-2'>
				<Pressable>
					<Text numberOfLines={1} className='text-white text-lg w-56 font-bold'>
						{Name}
					</Text>
					<Text
						numberOfLines={2}
						className='text-white/60 font-semibold leading-4 w-56 mb-4'
					>
						{Description}
					</Text>
				</Pressable>
				<View className='flex-row items-center justify-between mx-1.5'>
					<Text className='text-price text-lg font-extrabold'>$ {Cost}</Text>
					<View className='flex-row items-center bg-price/20 py-1 px-2 rounded-xl'>
						{itemCount > 0 ? (
							<>
								<Octicons
									name='dash'
									size={24}
									color={Colors.PRICE}
									onPress={() => setItemCount(prev => prev - 1)}
								/>
								<Text className='text-white text-lg font-medium mx-2 leading-5'>
									{itemCount}
								</Text>
							</>
						) : null}

						<Octicons
							name='plus'
							size={24}
							color={Colors.PRICE}
							onPress={() =>
								setItemCount(prev => (prev < 100 ? prev + 1 : prev))
							}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}

export default FoodCard
