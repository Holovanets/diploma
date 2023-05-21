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

import { AdressFields, CloseSessionButton, MainFields } from './components'
import { GoBackButton } from '@/components'
import { Colors, Images } from '@/constants'
import { ScreenProps } from '@/types'

interface IPlace extends ScreenProps {}

const HEADER_HEIGHT = 350

const SettingsScreen: FC<IPlace> = ({ navigation }) => {
	const scrollY = useRef(new Animated.Value(0)).current

	useEffect(() => {}, [])

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
						height: 100,
						backgroundColor: Colors.M_DARK,
						opacity: scrollY.interpolate({
							inputRange: [HEADER_HEIGHT - 220, HEADER_HEIGHT - 120],
							outputRange: [0, 1]
						})
					}}
				/>
				<View className='justify-left mt-4'>
					<GoBackButton callback={navigation.goBack} />
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
					source={Images.AVATAR}
					resizeMode='cover'
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
						bottom: 10,
						left: 30,
						right: 30,
						// height: 150,
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [0, 170, 320],
									outputRange: [0, 0, 150],
									extrapolate: 'clamp'
								})
							}
						]
					}}
				>
					<Animated.Text
						className='text-white text-4xl font-bold'
						style={{
							textShadowColor: '#000',
							textShadowOffset: { width: 0, height: 1 },
							textShadowRadius: 6,
							opacity: scrollY.interpolate({
								inputRange: [HEADER_HEIGHT - 220, HEADER_HEIGHT - 120],
								outputRange: [1, 0]
							})
						}}
					>
						Egor
					</Animated.Text>
					<Animated.Text
						className='text-white text-xl font-bold'
						style={{
							textShadowColor: '#000',
							textShadowOffset: { width: 0, height: 1 },
							textShadowRadius: 4,
							opacity: scrollY.interpolate({
								inputRange: [HEADER_HEIGHT - 220, HEADER_HEIGHT - 120],
								outputRange: [1, 0]
							})
						}}
					>
						online
					</Animated.Text>
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
			<Animated.ScrollView
				onScroll={Animated.event(
					[
						{
							nativeEvent: { contentOffset: { y: scrollY } }
						}
					],
					{ useNativeDriver: true }
				)}
				className='bg-mDark'
			>
				{renderRestourantHeader()}
				<View className='w-full'>
					<View
						className='w-14 h-14 bg-price rounded-full justify-center align-center items-center'
						style={{ position: 'absolute', top: -32, right: 15 }}
					>
						<Octicons name='file' size={24} color='white' />
					</View>
				</View>
				<View className='mb-4 px-4 py-8 bg-white/5 flex-row justify-between'>
					<View className='flex-1 items-center'>
						<View className='bg-price/20 rounded-full w-12 h-12 items-center justify-center'>
							<Octicons name='checklist' size={20} color={Colors.PRICE} />
						</View>
						<Text className='text-white text-center font-bold mt-2'>
							Історія{'\n'}замовлень
						</Text>
					</View>
					<View className='flex-1 items-center'>
						<View className='bg-accentRed/20 rounded-full w-12 h-12 items-center justify-center'>
							<Octicons name='gift' size={20} color={Colors.PRIMARY_RED} />
						</View>
						<Text className='text-white text-center font-bold mt-2'>
							Мої акції та пропозиції
						</Text>
					</View>
					<View className='flex-1 items-center'>
						<View className='bg-lGreen/20 rounded-full w-12 h-12 items-center justify-center'>
							<Octicons
								name='graph'
								size={20}
								color={Colors.GREEN_GRADIENT_LIGHT}
							/>
						</View>
						<Text className='text-white text-center font-bold mt-2'>
							Моя{'\n'}статистика
						</Text>
					</View>
				</View>

				<MainFields />
				<AdressFields />
				<CloseSessionButton />
				<View className='bg-white/5 w-full h-20 justify-center items-center align-center overflow-hidden mt-5'>
					<Text className='text-white/50'>
						CityFood for Android. Build v1.1.0. Ні, тобі не здалося
					</Text>
				</View>
				<View style={{ height: 50 }}></View>
			</Animated.ScrollView>
			{renderHeaderBar()}
			{/* <StatusBar hidden /> */}
		</ImageBackground>
	)
}

export default SettingsScreen
