import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import GeneralAction from '@/actions/GeneralAction'

import { StorageService } from '@/providers'

const CloseSessionButton: FC = () => {
	const dispatch = useDispatch()

	const logout = () => {
		StorageService.setToken('').then(() => {
			dispatch(GeneralAction.setToken(''))
			dispatch(GeneralAction.setUserData(null))
		})
	}
	return (
		<View className='px-4 py-4 mt-4 bg-white/5'>
			<View className='rounded-2xl overflow-hidden'>
				<Pressable
					onPress={() => {
						logout()
					}}
					android_ripple={{ color: 'rgba(255,125,125,0.3)' }}
					className='bg-cancel py-4 justify-center align-center items-center rounded-xl flex-row'
				>
					<Text className='text-white text-lg font-semibold'>
						Закрити сесію
					</Text>
					<Octicons
						name='sign-out'
						size={24}
						color='white'
						style={{ position: 'absolute', right: 20 }}
					/>
				</Pressable>
			</View>
		</View>
	)
}

export default CloseSessionButton
