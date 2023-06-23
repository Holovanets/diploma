import { Octicons } from '@expo/vector-icons'
import cs from 'clsx'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

interface IType {
	type: boolean[]
	setType: (type: boolean[]) => void
}

const Type: FC<IType> = ({ type, setType }) => {
	return (
		<View className='px-4 py-4 mt-4 flex-row justify-around'>
			<View className='rounded-2xl overflow-hidden'>
				<Pressable
					android_ripple={{ color: 'rgba(255,125,125,0.3)' }}
					className={cs(
						'py-4 px-6 justify-center align-center items-center rounded-xl flex-row',
						type[0] ? 'bg-cancel' : 'bg-cancel/20'
					)}
					onPress={() => setType([!type[0], type[1]])}
				>
					<Octicons name='location' size={24} color='white' />
					<Text className='text-white text-lg font-semibold ml-4'>
						Доставка
					</Text>
				</Pressable>
			</View>
			<View className='rounded-2xl overflow-hidden'>
				<Pressable
					android_ripple={{ color: 'rgba(255,125,125,0.3)' }}
					className={cs(
						'py-4 px-6 justify-center align-center items-center rounded-xl flex-row',
						type[1] ? 'bg-cancel' : 'bg-cancel/20'
					)}
					onPress={() => setType([type[0], !type[1]])}
				>
					<Text className='text-white text-lg font-semibold mr-4'>Заклад</Text>
					<Octicons name='person' size={24} color='white' />
				</Pressable>
			</View>
		</View>
	)
}

export default Type
