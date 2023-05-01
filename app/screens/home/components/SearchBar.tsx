import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, TextInput, View } from 'react-native'

import { FiltersButton } from '@/components'

interface ISearch {
	openFilter: () => void
}

const SearchBar: FC<ISearch> = ({ openFilter }) => {
	return (
		<View className='mt-5 flex-row justify-between items-center'>
			<View className='flex-row flex-1 rounded-2xl w-14 h-14 items-center py-3 px-4 my-2 bg-white/10 z-0'>
				<View className='mr-4 mt-0.5 justify-center'>
					<Octicons name='search' size={24} color='white' />
				</View>
				<TextInput
					placeholder='Пошук по всім закладам'
					className='text-white text-base flex-1'
					placeholderTextColor='rgba(255,255,255, 0.5)'
				/>
			</View>
			<View className='ml-2 flex-end'>
				<FiltersButton callback={openFilter} />
			</View>
		</View>
	)
}

export default SearchBar
