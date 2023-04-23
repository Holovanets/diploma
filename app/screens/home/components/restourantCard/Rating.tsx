import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { Colors } from '@/constants'

interface IRating {
	total: number
	count: number
}

const Rating: FC<IRating> = ({ total, count }) => {
	return (
		<View className='flex-1 justify-between'>
			<View className='flex-row items-center'>
				<Octicons name='star-fill' size={14} color={Colors.PRICE} />
				<Text className='text-white ml-1 font-bold'>{total}</Text>
				<Text className='text-white/50 ml-1 font-semibold'>({count})</Text>
			</View>
		</View>
	)
}

export default Rating
