import { NavigationProp } from '@react-navigation/native'
import { FC, useRef, useState } from 'react'
import { Animated, FlatList, ImageBackground, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { NextButton, Paginator, WelcomeCard } from './components'
import { GeneralAction } from '@/actions'
import { General } from '@/constants'
import { StorageService } from '@/providers'
import { ScreenProps } from '@/types'

const WelcomeScreen: FC<ScreenProps> = ({ navigation }) => {
	const dispatch = useDispatch()

	const navigate = () => {
		StorageService.setFirstTimeUse().then(() => {
			dispatch(GeneralAction.setIsFirstTimeUse())
		})
	}

	const [currentIndex, setCurrentIndex] = useState(0)

	const scrollX = useRef(new Animated.Value(0)).current
	const slidesRef = useRef<FlatList>(null)

	const viewableItemsChanged = useRef(({ viewableItems }: any) => {
		setCurrentIndex(viewableItems[0].index)
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

	const scrollTo = () => {
		if (currentIndex < General.WELCOME_CONTENT.length - 1) {
			slidesRef.current?.scrollToIndex({ index: currentIndex + 1 })
		} else {
			console.log('last item')
		}
	}

	return (
		<ImageBackground
			source={require('../../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<View className='flex-1 justify-center items-center pt-20'>
				<View
					style={{
						flex: 3
					}}
				>
					<FlatList
						data={General.WELCOME_CONTENT}
						keyExtractor={item => item.title}
						horizontal
						showsHorizontalScrollIndicator={false}
						pagingEnabled
						overScrollMode='never'
						renderItem={({ item }) => <WelcomeCard {...item} />}
						onScroll={Animated.event(
							[{ nativeEvent: { contentOffset: { x: scrollX } } }],
							{
								useNativeDriver: false
							}
						)}
						scrollEventThrottle={32}
						onViewableItemsChanged={viewableItemsChanged}
						viewabilityConfig={viewConfig}
						ref={slidesRef}
					/>
				</View>
				<Paginator data={General.WELCOME_CONTENT} {...{ scrollX }} />
				{currentIndex === General.WELCOME_CONTENT.length - 1 ? (
					<NextButton callback={navigate} title='Уперед' />
				) : (
					<NextButton callback={scrollTo} title='Далі' />
				)}
			</View>
		</ImageBackground>
	)
}

export default WelcomeScreen
