import { Octicons } from '@expo/vector-icons'
import cn from 'clsx'
import { StatusBar } from 'expo-status-bar'
import LottieView from 'lottie-react-native'
import { FC, useEffect, useRef, useState } from 'react'
import {
	Animated,
	FlatList,
	Image,
	ImageBackground,
	Pressable,
	Text,
	View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
	BoxLikeButton,
	BoxLocButton,
	BoxSearchButton,
	CategoryListItem,
	CategoryRenderItem,
	FoodCard,
	HeaderImage,
	InfoButton
} from './components'
import testCategories from './testCategories'
import testData from './testData'
import testMenu from './testMenu'
import { GoBackButton } from '@/components'
import { Colors, Images } from '@/constants'
import { RestourantService } from '@/services'
import { ScreenProps } from '@/types'

interface IPlace extends ScreenProps {
	route: {
		params: {
			id: number
			cover: string
		}
	}
}
interface IRestInfo {
	cover: string
	creator: number
	description: string
	geolat: string
	geolng: string
	id: number
	logo: string
	name: string
	poster: string
}
interface IDish {
	Id: number
	Category: string
	Name: string
	Cost: number
	Discount: number
	Link: string
	Description: string
}

const HEADER_HEIGHT = 350

const PlaceScreen: FC<IPlace> = ({
	navigation,
	route: {
		params: { id, cover }
	}
}) => {
	const [restInfo, setRestInfo] = useState<IRestInfo | null>(null)
	const [selectedCategory, setSelectedCategory] = useState(
		testCategories[0].name
	)
	const [isLoved, setIsLoved] = useState(false)
	const [isOnline, setIsOnline] = useState(false)
	const [isAcceess, setIsAccess] = useState(false)

	const scrollY = useRef(new Animated.Value(0)).current

	useEffect(() => {
		RestourantService.getRestourantById(id).then(response => {
			if (response?.status) {
				setRestInfo(response?.data)
				console.log(restInfo)
			} else {
				console.log(response.message)
				console.log(`rest id ${id}`)
			}
		})
		setIsOnline(true)
	}, [])
	const [dishes, setDishes] = useState<IDish | null>(null)

	function renderHeaderBar() {
		return (
			<View
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0
				}}
				className='justify-between items-center px-7 pt-6 flex-row'
			>
				<Animated.View
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						height: 90,
						backgroundColor: Colors.M_DARK,
						opacity: scrollY.interpolate({
							inputRange: [HEADER_HEIGHT - 220, HEADER_HEIGHT - 120],
							outputRange: [0, 1]
						})
					}}
				/>
				<View className='justify-left'>
					<GoBackButton callback={navigation.goBack} dark />
				</View>
				<View className='justify-right flex-row'>
					<BoxLocButton callback={() => console.log('lol')} />
					<BoxSearchButton callback={() => console.log('lol')} />
					<BoxLikeButton
						callback={() => setIsLoved(prev => !prev)}
						active={isLoved}
					/>
				</View>
			</View>
		)
	}
	function renderRestourantInfo() {
		return (
			<Animated.View
				className=' flex-1 w-full px-6 py-4  bg-mDark -mt-10'
				style={{
					borderTopLeftRadius: scrollY.interpolate({
						inputRange: [HEADER_HEIGHT - 220, HEADER_HEIGHT - 170],
						outputRange: [10, 0]
					}),
					borderTopRightRadius: scrollY.interpolate({
						inputRange: [HEADER_HEIGHT - 220, HEADER_HEIGHT - 170],
						outputRange: [10, 0]
					})
				}}
			>
				<View className='flex-row w-full justify-around my-4'>
					<View
						className={cn(
							'h-8 w-8 overflow-hidden items-center justify-center align-center rounded-full',
							isOnline ? 'bg-lGreen/40' : 'bg-accentRed/40'
						)}
					>
						<LottieView
							source={
								isOnline
									? Images.BEACON_LOADING_ANIM_ON
									: Images.BEACON_LOADING_ANIM_OFF
							}
							autoPlay
							loop
						/>
					</View>
					<View
						className={cn(
							'h-8 w-8 overflow-hidden items-center justify-center align-center rounded-full',
							isAcceess ? 'bg-lGreen/40' : 'bg-accentRed/40'
						)}
					>
						<Octicons
							name={isAcceess ? 'issue-closed' : 'issue-draft'}
							size={20}
							color={isAcceess ? '#0f0' : '#f00'}
						/>
					</View>
					<View
						className={cn(
							'h-8 w-8 overflow-hidden items-center justify-center align-center rounded-full bg-price/40'
						)}
					>
						<Octicons name={'zap'} size={20} color={Colors.PRICE} />
					</View>
				</View>
				<Text className='text-white leading-6 font-light'>
					{restInfo?.description}
				</Text>
				<Text className='mt-8 text-white text-4xl font-extrabold'>Меню</Text>
			</Animated.View>
		)
	}
	function renderRestourantHeader() {
		return (
			<View
				className='items-center overflow-hidden'
				style={{ marginTop: -1000, paddingTop: 1000 }}
			>
				<Animated.Image
					source={{ uri: cover }}
					resizeMode='contain'
					style={{
						height: HEADER_HEIGHT,
						width: '200%',
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
									outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
								})
							},
							{
								scale: scrollY.interpolate({
									inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
									outputRange: [2, 1, 0.75]
								})
							}
						]
					}}
				/>

				<Animated.View
					style={{
						position: 'absolute',
						bottom: 30,
						left: 30,
						right: 30,
						height: 150,
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [0, 70, 250],
									outputRange: [0, 0, 150],
									extrapolate: 'clamp'
								})
							}
						]
					}}
				>
					<Animated.Text
						className='text-white text-4xl font-bold '
						style={{
							textShadowColor: '#000',
							textShadowOffset: { width: 0, height: 2 },
							textShadowRadius: 15,
							opacity: scrollY.interpolate({
								inputRange: [HEADER_HEIGHT - 220, HEADER_HEIGHT - 170],
								outputRange: [1, 0]
							})
						}}
					>
						{restInfo?.name}
					</Animated.Text>
					<FlatList
						showsHorizontalScrollIndicator={false}
						data={testData}
						keyExtractor={item => item?.icon}
						horizontal
						renderItem={({ item }) => <InfoButton {...item} />}
						className='my-5 overflow-visible'
					/>
				</Animated.View>
			</View>
		)
	}

	function renderCategories() {
		return (
			<View>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={testCategories}
					keyExtractor={item => item.name}
					renderItem={({ item }) => (
						<CategoryRenderItem
							name={item.name}
							isActive={item.name === selectedCategory}
							selectCategory={category => setSelectedCategory(category)}
						/>
					)}
					className='mx-6 overflow-visible mt-2'
				/>
			</View>
		)
	}
	return (
		<ImageBackground
			source={require('../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<Animated.FlatList
				data={testMenu}
				keyExtractor={item => item?.Name}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{renderRestourantHeader()}
						{renderRestourantInfo()}
						{renderCategories()}
					</View>
				}
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[
						{
							nativeEvent: { contentOffset: { y: scrollY } }
						}
					],
					{ useNativeDriver: true }
				)}
				renderItem={({ item }) => <FoodCard {...item} />}
			/>
			{renderHeaderBar()}
			<StatusBar hidden />
		</ImageBackground>
	)
}

export default PlaceScreen
