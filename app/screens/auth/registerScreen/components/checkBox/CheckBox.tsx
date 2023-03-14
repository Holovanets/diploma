import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { CustomCheckBox } from '@/components'

interface CheckBoxProps {
	checked: boolean
	title: string
	callback: () => void
}

const CheckBox: FC<CheckBoxProps> = ({ checked, title, callback }) => {
	return (
		<Pressable onPress={callback} className='ml-2 mt-4 flex-row items-center'>
			<CustomCheckBox checked={checked} />
			<Text className='ml-6 text-base text-white/60'>{title}</Text>
		</Pressable>
	)
}

export default CheckBox
