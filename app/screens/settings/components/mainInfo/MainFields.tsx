import { FC } from 'react'
import { Text, View } from 'react-native'

const MainFields: FC = () => {
	return (
		<View className='pl-4 py-4 bg-white/5'>
			<Text className='text-price text-lg'>Головне</Text>
			<View
				className='mt-2'
				style={{ borderBottomColor: '#505050', borderBottomWidth: 1 }}
			>
				<Text className='text-white text-lg'>+380 (96) 774 79 83</Text>
				<Text className='text-white/50 my-1'>Натисни щоб змінити</Text>
			</View>
			<View
				className='mt-2'
				style={{ borderBottomColor: '#505050', borderBottomWidth: 1 }}
			>
				<Text className='text-white text-lg'>@klapeks</Text>
				<Text className='text-white/50 my-1'>Username</Text>
			</View>
			<View
				className='mt-2'
				style={{ borderBottomColor: '#505050', borderBottomWidth: 1 }}
			>
				<Text className='text-white text-lg'>vip.golovanets@gmail.com</Text>
				<Text className='text-white/50 my-1'>E-mail</Text>
			</View>
		</View>
	)
}

export default MainFields
