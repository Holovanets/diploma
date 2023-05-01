import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
	FlatList,
	Image,
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { FilterModal, RestourantCard, SearchBar, TopBar } from './components'
import { Separator } from '@/components'
import { RestourantService } from '@/services'
import { ScreenProps } from '@/types'
import { Display } from '@/utils'

const categories = [
	{ name: 'Недавние' },
	{ name: 'Любимые' },
	{ name: 'Популярные' },
	{ name: 'Лучшие' },
	{ name: 'Трендовые' }
]

const HomeScreen: FC<ScreenProps> = ({ navigation }) => {
	const [notifNum, setNotifNum] = useState(0)
	const [activeCategory, setActiveCategory] = useState()
	const [restourants, setRestourants] = useState<any>(null)

	const bottomSheetModalRef = useRef<BottomSheetModal>(null)

	// callbacks
	const openFilterModal = useCallback(() => {
		bottomSheetModalRef.current?.present()
	}, [])

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			RestourantService.getBestRestourants().then(response => {
				if (response?.status) {
					setRestourants(response.data)
					console.log(restourants)
				} else {
					console.log(response.message)
				}
			})
		})

		setNotifNum(12)
		return unsubscribe
	}, [])

	return (
		<ImageBackground
			source={require('../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<SafeAreaView className='pt-7 px-0 flex-1'>
				<View className='px-7'>
					<TopBar notificationCount={notifNum} />
					<SearchBar openFilter={openFilterModal} />
				</View>
				{/* Special */}
				<ScrollView className='my-2'>
					<View className='px-7'>
						<Image
							source={require('../../assets/images/special.png')}
							className='w-full h-36 rounded-2xl'
							resizeMode='cover'
						/>
					</View>
					{/*first carousel*/}

					<View className='mt-6 z-10 ' style={{ width: Display.setWidth(100) }}>
						<View className='flex-row align-center items-center justify-between mr-5 mb-4 px-7'>
							<Text className='text-white text-xl font-semibold'>
								Ближайшие лучшие
							</Text>
							<Text className='text-accentRed text-sm font-light'>Больше</Text>
						</View>
						<FlatList
							showsHorizontalScrollIndicator={false}
							// pagingEnabled
							overScrollMode='never'
							data={restourants}
							keyExtractor={item => item?.id}
							horizontal
							ListHeaderComponent={() => <Separator width={28} />}
							ListFooterComponent={() => <Separator width={28} />}
							ItemSeparatorComponent={() => <Separator width={14} />}
							renderItem={({ item }) => (
								<RestourantCard
									navigate={(id: number, cover: string) =>
										navigation.navigate('PlaceScreen', { id, cover })
									}
									{...item}
								/>
							)}
							// className='ml-7'
							style={{ overflow: 'visible' }}
						/>
					</View>

					<View className='flex-row'>
						{categories.map(item => (
							<Pressable key={item.name}>
								<Text key={item.name}>{item.name}</Text>
							</Pressable>
						))}
					</View>
					<FilterModal reference={bottomSheetModalRef} />
				</ScrollView>
			</SafeAreaView>
		</ImageBackground>
	)
}

export default HomeScreen
