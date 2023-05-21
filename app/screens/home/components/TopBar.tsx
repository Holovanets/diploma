import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { NotificationButton } from '@/components'
import { ScreenProps } from '@/types'

interface ITopBar extends ScreenProps {
	notificationCount: number
}

const TopBar: FC<ITopBar> = ({ notificationCount, navigation }) => {
	return (
		<View className='flex-row items-center justify-between'>
			<View className='flex-col h-full content-between'>
				<View className='flex-row items-center'>
					<Text className='text-white text-sm font-normal mr-2'>Самовивіз</Text>
					<Octicons className='' name='chevron-down' size={20} color='white' />
				</View>
				<View className='flex-row items-center mt-3'>
					<Octicons name='location' size={16} color='white' />
					<Text className='text-price text-sm font-normal mx-2'>
						Моє місцезнаходження
					</Text>
					<Octicons name='chevron-down' size={20} color='white' />
				</View>
			</View>
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
