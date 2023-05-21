import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

const AdressFields: FC = () => {
	return (
		<View className='pl-4 py-4 mt-4 bg-white/5'>
			<Text className='text-price text-lg'>Оплата та адреси</Text>
			<View
				className='mt-2 py-3 flex-row items-center align-center'
				style={{ borderBottomColor: '#505050', borderBottomWidth: 1 }}
			>
				<Octicons name='location' size={22} color='#AAA' />
				<Text className='text-white text-lg ml-5'>Мої адреси</Text>
			</View>
			<View
				className='mt-2 py-3 flex-row items-center align-center'
				style={{ borderBottomColor: '#505050', borderBottomWidth: 1 }}
			>
				<Octicons name='credit-card' size={22} color='#AAA' />
				<Text className='text-white text-lg ml-5'>Платіжні методи</Text>
			</View>
		</View>
	)
}

export default AdressFields
