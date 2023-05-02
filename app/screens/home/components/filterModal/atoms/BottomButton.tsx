import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

interface IB {
	callback: () => void
}

const BottomButton: FC<IB> = ({ callback }) => {
	return (
		<View className='rounded-xl overflow-hidden'>
			<Pressable
				onPress={() => callback()}
				className='bg-accentRed justify-center items-center align-center h-16 flex-row'
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
			>
				<Text className='text-white text-xl font-bold'>Додати</Text>
				<View
					className='w-10 h-10 items-center justify-center rounded-xl'
					style={{
						position: 'absolute',
						right: 24,
						top: 12,
						bottom: 12,
						backgroundColor: '#202020'
					}}
				>
					<Octicons name='arrow-right' color='white' size={24} />
				</View>
			</Pressable>
		</View>
	)
}

export default BottomButton
