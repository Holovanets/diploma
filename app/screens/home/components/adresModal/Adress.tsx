import { Octicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { CustomCheckBox } from '@/components'

interface CheckBoxProps {
	checked: boolean
	title: string
	callback: () => void
}

const Adress: FC<CheckBoxProps> = ({ checked, title, callback }) => {
	return (
		<Pressable
			android_ripple={{ color: 'rgba(255,125,125,0.3)' }}
			onPress={callback}
			className='flex-row items-center py-4 pl-4'
		>
			<CustomCheckBox checked={checked} />
			<Text className='ml-6 text-base text-white/60'>{title}</Text>
			<View
				style={{
					position: 'absolute',
					right: 0,
					borderLeftColor: '#505050',
					borderLeftWidth: 2
				}}
				className='px-4 py-1'
			>
				<Octicons name='tools' size={24} color='white' />
			</View>
		</Pressable>
	)
}

export default Adress
