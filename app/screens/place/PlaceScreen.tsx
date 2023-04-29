import { Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { FC, useEffect, useRef, useState } from 'react'
import {
	Animated,
	FlatList,
	Image,
	ImageBackground,
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
	FoodCard,
	HeaderImage,
	InfoButton
} from './components'
import testCategories from './testCategories'
import testData from './testData'
import testMenu from './testMenu'
import { GoBackButton } from '@/components'
import { Colors } from '@/constants'
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

const ListHeader = () => (
	<View
		style={{
			flexDirection: 'row',
			flex: 1,
			width: 40,
			justifyContent: 'flex-end'
		}}
	>
		<View
			style={{
				backgroundColor: Colors.PRICE,
				width: 20,
				borderTopLeftRadius: 64,
				borderBottomLeftRadius: 64
			}}
		/>
	</View>
)

const ListFooter = () => (
	<View
		style={{
			flexDirection: 'row',
			flex: 1,
			width: 40
		}}
	>
		<View
			style={{
				backgroundColor: Colors.PRICE,
				width: 20,
				borderTopRightRadius: 64,
				borderBottomRightRadius: 64
			}}
		/>
	</View>
)

const HEADER_HEIGHT = 350

const PlaceScreen: FC<IPlace> = ({
	navigation,
	route: {
		params: { id, cover }
	}
}) => {
	const [restInfo, setRestInfo] = useState(null)
	const [restName, setRestName] = useState('Restik')
	const [selectedCategory, setSelectedCategory] = useState(
		testCategories[0].name
	)
	const [isLoved, setIsLoved] = useState(false)

	const scrollY = useRef(new Animated.Value(0)).current

	useEffect(() => {
		RestourantService.getRestourantById(id).then(response => {
			if (response?.status) {
				console.log(restInfo)

				setRestName(response?.data?.name)
				setRestInfo(response?.data)
			} else {
				console.log(response.message)
				console.log(`rest id ${id}`)
			}
		})
	}, [])

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
						{restName}
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

	return (
		<ImageBackground
			source={require('../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<Animated.FlatList
				data={[{ id: 1, name: 'kostil' }]}
				keyExtractor={item => item?.name}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={<View>{renderRestourantHeader()}</View>}
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[
						{
							nativeEvent: { contentOffset: { y: scrollY } }
						}
					],
					{ useNativeDriver: true }
				)}
				renderItem={({ item }) => (
					<Animated.View
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
						className='w-full bg-mDark pt-10 -mt-10 z-10'
					>
						<View className='my-5'>
							<FlatList
								data={testCategories}
								keyExtractor={item => item?.name}
								horizontal
								ListHeaderComponent={() => <ListHeader />}
								ListFooterComponent={() => <ListFooter />}
								showsHorizontalScrollIndicator={false}
								renderItem={({ item }) => (
									<CategoryListItem
										name={item.name}
										isActive={item.name === selectedCategory}
										selectCategory={category => setSelectedCategory(category)}
									/>
								)}
								className='overflow-visible'
							/>
						</View>
						<View>
							{testMenu
								?.filter(food => food?.Category == selectedCategory)
								?.map(item => (
									<FoodCard key={item.Id} {...item} />
								))}
						</View>
					</Animated.View>
				)}
			/>
			{renderHeaderBar()}
			<StatusBar hidden />
		</ImageBackground>
	)
}

export default PlaceScreen
