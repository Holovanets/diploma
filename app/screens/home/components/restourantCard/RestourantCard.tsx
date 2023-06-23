import { Octicons } from '@expo/vector-icons'
import { FC, useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import Distance from './Distance'
import Rating from './Rating'
import Time from './Time'
import { Colors, Images } from '@/constants'
import { RestourantService } from '@/services'
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
	const [isLiked, setIsLiked] = useState(false)
	const [logoLoading, setLogoLoading] = useState(true)

	useEffect(() => {
		RestourantService.isRestikLiked(id).then(response => {
			if (response?.status) {
				setIsLiked(response.data.liked)
			} else {
				console.log('cannot set like')
			}
		})
	}, [isLiked])

	const toggleLike = async () => {
		RestourantService.toggleRestikLike(id).then(response => {
			if (response?.status) {
				setIsLiked(prev => !prev)
				console.log('лайк тогл id: ', id)
			} else {
				console.log('like dont toggle')
			}
		})
	}
	const logoLoading_Error = () => {
		setLogoLoading(false)
	}
	return (
		<View className='rounded-2xl overflow-hidden w-80'>
			<Pressable
				onPress={() => navigate(id, cover)}
				className='w-80 h-64 bg-black/10 rounded-2xl overflow-hidden'
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
			>
				<View>
					<Image
						source={Images.PATTERN}
						className='w-full h-40 rounded-2xl'
						style={{ position: 'absolute' }}
					/>
					<Image source={{ uri: poster }} className='w-full h-40 rounded-2xl' />
					<View
						className='flex-row px-1 py-1'
						style={{
							position: 'absolute',
							right: 0,
							bottom: 0,
							borderTopRightRadius: 0,
							borderBottomLeftRadius: 0
						}}
					>
						<Distance />
						<Time />
					</View>

					<View
						className='rounded-full justify-center overflow-hidden bg-accentRed/30 mx-3 my-3'
						style={{ position: 'absolute', right: 0 }}
					>
						<Pressable
							android_ripple={{ color: 'rgba(255,125,125,0.3)' }}
							className='items-center justify-center content-center px-2.5 py-2.5'
							onPress={() => toggleLike()}
						>
							<Octicons
								name={isLiked ? 'heart-fill' : 'heart'}
								size={22}
								color={Colors.CANCEL}
							/>
						</Pressable>
					</View>
				</View>
				<View className='flex-1 justify-center flex-row '>
					<View className='flex-row w-80 items-center px-2'>
						<Image
							source={{ uri: logo }}
							loadingIndicatorSource={Images.PLACE_LOGO}
							className='w-16 h-16'
							onError={() => {}}
						/>

						<View>
							<View className='w-56 ml-3 flex-row justify-between items-center'>
								<Text className='text-white text-xl font-extrabold mb-1'>
									{name}
								</Text>
								<Text className='text-white/50 font-bold'>Недавние</Text>
							</View>
							<View className='w-56 ml-3 flex-row items-center'>
								<Rating total={4.5} count={214} />
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
