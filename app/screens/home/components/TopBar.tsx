import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { NotificationButton } from '@/components'
import { ScreenProps } from '@/types'

interface ITopBar extends ScreenProps {
	notificationCount: number
	callback: () => void
}

const TopBar: FC<ITopBar> = ({ notificationCount, navigation, callback }) => {
	return (
		<View className='flex-row items-center justify-between'>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				onPress={callback}
				className='flex-col h-full content-between'
			>
				<View className='flex-row items-center'>
					<Text className='text-white text-sm font-normal mr-2'>Самовивіз</Text>
					<Octicons className='' name='chevron-down' size={20} color='white' />
				</View>
				<View className='flex-row items-center mt-3'>
					<Octicons name='location' size={16} color='white' />
					<Text className='text-price text-sm font-semibold mx-2'>
						Моє місцезнаходження
					</Text>
				</View>
			</Pressable>

			<View className='flex-end'>
				<NotificationButton
					callback={() => {
						navigation.navigate('NotificationsScreen')
					}}
					notificationsNumber={notificationCount}
				/>
			</View>
		</View>
	)
}

export default TopBar
