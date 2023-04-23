import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { Colors } from '@/constants'

const Time: FC = () => {
	return (
		<View className='bg-price/20 px-2 py-1 rounded-full flex-row items-center w-auto ml-3'>
			<Octicons name='clock' size={13} color={Colors.PRICE} />
			<Text className='text-price  font-semibold ml-2'>10</Text>
		</View>
	)
}

export default Time
