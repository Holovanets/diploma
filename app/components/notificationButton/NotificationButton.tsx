import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Colors } from '@/constants'

interface GoBackProps {
	callback: () => void
	notificationsNumber: number
}

const NotificationButton: FC<GoBackProps> = ({
	callback,
	notificationsNumber
}) => {
	return (
		<View className='rounded-2xl justify-center  overflow-hidden w-14 h-14 bg-accentRed/20 '>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				className='items-center justify-center content-center w-14 h-14'
				onPress={callback}
			>
				<Octicons name='bell' size={24} color={Colors.PRIMARY_RED} />
				{notificationsNumber > 0 ? (
					<View
						className='rounded-full bg-lightRed w-4 h-4 justify-center items-center content-center'
						style={{ position: 'absolute', right: 10, top: 10 }}
					>
						<Text className='text-white text-xs'>
							{notificationsNumber > 9 ? '9+' : notificationsNumber}
						</Text>
					</View>
				) : null}
			</Pressable>
		</View>
	)
}

export default NotificationButton
