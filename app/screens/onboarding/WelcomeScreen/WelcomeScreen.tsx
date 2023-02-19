import { FC, LegacyRef, useRef, useState } from 'react'
import { Animated, FlatList, StatusBar, Text, View } from 'react-native'

import { NextButton, Paginator, WelcomeCard } from './components'
import { Separator } from '@/components'
import { General } from '@/constants'
import Display from '@/utils/Display'

const WelcomeScreen: FC = () => {
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
		<View className='flex-1 justify-center items-center bg-black pt-20'>
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
			<NextButton scrollTo={scrollTo} />
		</View>
	)
}

export default WelcomeScreen
