import { FC, useRef } from 'react'
import {
	Animated,
	Image,
	ImageBackground,
	ScrollView,
	Text,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TopBar } from './components'
import { GoBackButton } from '@/components'
import { Colors, Images } from '@/constants'
import { ScreenProps } from '@/types'

interface INotifications extends ScreenProps {}

const NotificationsScreen: FC<INotifications> = ({ navigation }) => {
	const scrollY = useRef(new Animated.Value(0)).current

	return (
		<ImageBackground
			source={require('../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<SafeAreaView className='overflow-visible'>
				<Animated.ScrollView
					onScroll={Animated.event(
						[
							{
								nativeEvent: { contentOffset: { y: scrollY } }
							}
						],
						{ useNativeDriver: true }
					)}
					className='px-4'
					style={{ paddingTop: 120 }}
				>
					{new Array(12).fill('lorem ipsum').map((e, index) => (
						<View
							className='w-full h-24 items-center bg-white/10 rounded-2xl my-2 overflow-hidden py-2 px-2 flex-row'
							key={Math.random()}
						>
							<View className=''>
								<Image
									source={Images.FACEBOOK_LOGO}
									className='w-20 h-20 rounded-2xl'
								/>
							</View>
							<View className='ml-3'>
								<Text className='text-white text-lg font-semibold mb-3'>
									Facebook
								</Text>
								<Text className='text-white'>Тебе точно стоит сходи...</Text>
							</View>
							<View
								className='items-end'
								style={{ position: 'absolute', right: 12 }}
							>
								<Text className='text-white/50 mb-3'>19:20</Text>
								<View className='bg-cancel rounded-full w-6 h-6 items-center justify-center align-center'>
									<Text className='text-white font-bold'>{index}</Text>
								</View>
							</View>
						</View>
					))}
					<View style={{ height: 200 }}></View>
				</Animated.ScrollView>
			</SafeAreaView>
			<TopBar {...{ navigation, scrollY }} />
		</ImageBackground>
	)
}

export default NotificationsScreen
