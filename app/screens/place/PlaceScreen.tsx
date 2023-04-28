import { Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { FC, useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, Text, View } from 'react-native'
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

const PlaceScreen: FC<IPlace> = ({
	navigation,
	route: {
		params: { id, cover }
	}
}) => {
	const [restName, setRestName] = useState('Restik')
	const [selectedCategory, setSelectedCategory] = useState(
		testCategories[0].name
	)
	const [isLoved, setIsLoved] = useState(false)

	useEffect(() => {
		RestourantService.getRestourantById(id).then(response => {
			if (response?.status) {
				console.log(response?.data?.name)
				setRestName(response?.data?.name)
			} else {
				console.log(response.message)
				console.log(`rest id ${id}`)
			}
		})
	}, [])
	return (
		<ImageBackground
			source={require('../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<ImageBackground
				source={{ uri: cover }}
				className='w-full h-96 flex-col justify-between pb-10 z-0'
				resizeMode='cover'
			>
				<View className='px-6 pt-7'>
					<View className='flex-row w-full justify-between'>
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
				</View>
				<View className='px-7'>
					<Text
						className='text-white text-4xl font-bold '
						style={{
							textShadowColor: '#000',
							textShadowOffset: { width: 0, height: 2 },
							textShadowRadius: 15
						}}
					>
						{restName}
					</Text>

					<FlatList
						showsHorizontalScrollIndicator={false}
						data={testData}
						keyExtractor={item => item?.icon}
						horizontal
						renderItem={({ item }) => <InfoButton {...item} />}
						className='my-5 overflow-visible'
					/>
				</View>
			</ImageBackground>
			<ScrollView className='-mt-10 z-10'>
				<View
					style={{
						borderTopLeftRadius: 30,
						borderTopRightRadius: 30
					}}
					className='w-full bg-mDark pt-10'
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
				</View>
			</ScrollView>
			<StatusBar hidden />
		</ImageBackground>
	)
}

export default PlaceScreen
