import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import Distance from './Distance'
import Rating from './Rating'
import Time from './Time'
import { Colors } from '@/constants'
import { ScreenProps } from '@/types'

interface ICard extends ScreenProps {
	id: number
	name: string
	geolat: string
	geolng: string
	logo: string
	poster: string
	cover: string
	navigate: (id: number, cover: string) => void
}

const RestourantCard: FC<ICard> = ({
	id,
	name,
	geolat,
	geolng,
	logo,
	poster,
	cover,
	navigate,
	navigation
}) => {
	return (
		<View className='rounded-2xl overflow-hidden w-80'>
			<Pressable
				onPress={() => navigate(id, cover)}
				className='w-80 h-64 bg-black/50 rounded-2xl overflow-hidden'
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
			>
				<Image source={{ uri: poster }} className='w-full h-40 rounded-2xl' />
				<View className='flex-1 justify-center flex-row '>
					<View className='flex-row w-80 items-center px-2'>
						<Image source={{ uri: logo }} className='w-16 h-16' />

						<View>
							<View className='w-56 ml-3 flex-row justify-between items-center'>
								<Text className='text-white text-xl font-extrabold mb-1'>
									{name}
								</Text>
								<Text className='text-white/50 font-bold'>Недавние</Text>
							</View>
							<View className='w-56 ml-3 flex-row items-center'>
								<Rating total={4.5} count={214} />
								<View className='flex-row'>
									<Distance />
									<Time />
								</View>
							</View>
						</View>

						{/*second line */}
					</View>
				</View>
			</Pressable>
		</View>
	)
}

export default RestourantCard
