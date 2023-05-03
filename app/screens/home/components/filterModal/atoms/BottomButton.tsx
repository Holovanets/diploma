import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

interface IB {
	callback: () => void
	count: number
}

const BottomButton: FC<IB> = ({ callback, count = 1 }) => {
	return (
		<View className='rounded-xl overflow-hidden'>
			<Pressable
				onPress={() => callback()}
				className='bg-accentRed justify-center items-center align-center h-16 flex-row'
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
			>
				<Text className='text-white text-xl font-bold'>Додати</Text>
				<View
					className='px-2 h-10 items-center justify-center align-center rounded-xl flex-row'
					style={{
						position: 'absolute',
						right: 24,
						top: 12,
						bottom: 12,
						backgroundColor: '#202020'
					}}
				>
					<Text className='text-white text-lg font-bold mr-2 leading-5'>
						{count}
					</Text>
					<Octicons name='arrow-right' color='white' size={24} />
				</View>
			</Pressable>
		</View>
	)
}

export default BottomButton
