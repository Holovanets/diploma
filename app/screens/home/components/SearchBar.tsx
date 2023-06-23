import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

import { FiltersButton } from '@/components'

interface ISearch {
	openFilter: () => void
}

const SearchBar: FC<ISearch> = ({ openFilter }) => {
	return (
		<View className='mt-5 flex-row justify-between items-center'>
			<View className='rounded-2xl overflow-hidden flex-1 my-2 '>
				<Pressable
					onPress={() => {
						openFilter()
					}}
					android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
					className='py-3 px-4 bg-white/10 h-14  items-center flex-row '
				>
					<View className='mr-4 mt-0.5 justify-center'>
						<Octicons name='search' size={24} color='white' />
					</View>
					<TextInput
						placeholder='Пошук'
						className='text-white text-base flex-1'
						placeholderTextColor='rgba(255,255,255, 0.5)'
						editable={false}
					/>
				</Pressable>
			</View>
			<View className='ml-2 flex-end'>
				<FiltersButton callback={openFilter} />
			</View>
		</View>
	)
}

export default SearchBar
