import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface ICard {
	name: string
	geolat: string
	geolng: string
	logo: string
	poster: string
	cover: string
}

const RestourantCard: FC<ICard> = ({
	name,
	geolat,
	geolng,
	logo,
	poster,
	cover
}) => {
	console.log()
	return (
		<Pressable className='w-80 h-64 bg-black/50 mr-6 rounded-2xl overflow-hidden'>
			<Image source={{ uri: poster }} className='w-full h-40 rounded-2xl' />
			<View className=' flex-1 justify-center flex-row'>
				<View className='flex-row w-52 items-center pl-2'>
					<Image source={{ uri: logo }} className='w-16 h-16' />
					<View className='flex-start justify-center ml-3 '>
						<Text className='text-white text-xl font-bold'>{name}</Text>
						<View className='flex-row items-center'>
							<Octicons name='star-fill' size={14} color={Colors.PRICE} />
							<Text className='text-white ml-1 font-bold'>4.5</Text>
							<Text className='text-white/50 ml-1 font-semibold'>(214)</Text>
						</View>
					</View>
				</View>
				<View className='flex-end justify-center w-28 pr-2'>
					<Text className='text-white/40 font-semibold text-sm text-right mb-4'>
						Недавнее
					</Text>
					<View>
						<View className='flex-row '>
							<View className='bg-price/20 px-2 py-1 rounded-full flex-row items-center w-auto'>
								<Octicons name='location' size={15} color={Colors.PRICE} />
								<Text className='text-price font-semibold ml-2'>340m</Text>
							</View>
							<View className='bg-price/20 px-2 py-1 rounded-full flex-row items-center w-auto ml-3'>
								<Octicons name='clock' size={15} color={Colors.PRICE} />
								<Text className='text-price  font-semibold ml-2'>10</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</Pressable>
	)
}

export default RestourantCard
