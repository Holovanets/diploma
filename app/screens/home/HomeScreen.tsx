import { Octicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import {
	Image,
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
	CustomInput,
	FiltersButton,
	GoBackButton,
	NotificationButton
} from '@/components'
import { ScreenProps } from '@/types'

const HomeScreen: FC<ScreenProps> = ({ navigation }) => {
	return (
		<ImageBackground
			source={require('../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<SafeAreaView className='py-7 px-7 flex-1'>
				{/* Top bar */}

				<View className='flex-row items-center justify-between'>
					<View className='flex-col h-full content-between'>
						<View className='flex-row items-center'>
							<Text className='text-white text-sm font-normal mr-2'>
								Самовивіз
							</Text>
							<Octicons
								className=''
								name='chevron-down'
								size={20}
								color='white'
							/>
						</View>
						<View className='flex-row items-center mt-3'>
							<Text className='text-white text-sm font-normal mr-2'>
								Адреса
							</Text>
							<Text className='text-price text-sm font-normal mr-2'>
								Моє місцезнаходження
							</Text>
							<Octicons
								className=''
								name='chevron-down'
								size={20}
								color='white'
							/>
						</View>
					</View>
					<View className='flex-end'>
						<NotificationButton
							callback={() => {
								console.log('pressed')
							}}
						/>
					</View>
				</View>

				{/* search bar */}

				<View className='mt-5 flex-row justify-between items-center'>
					<View className='flex-row flex-1 rounded-2xl w-14 h-14 items-center py-3 px-4 my-2 bg-white/10 z-0'>
						<View className='mr-4 mt-0.5 justify-center'>
							<Octicons name='search' size={24} color='white' />
						</View>
						<TextInput
							placeholder='Пошук по всім закладам'
							className='text-white text-base flex-1'
							placeholderTextColor='rgba(255,255,255, 0.5)'
						/>
					</View>
					<View className='ml-2 flex-end'>
						<FiltersButton
							callback={() => {
								console.log('Pressed')
							}}
						/>
					</View>
				</View>
				{/* Special */}
				<ScrollView className='my-2'>
					<Image
						source={require('../../assets/images/special.png')}
						className='w-full h-36 rounded-2xl'
						resizeMode='cover'
					/>
				</ScrollView>
			</SafeAreaView>
		</ImageBackground>
	)
}

export default HomeScreen
