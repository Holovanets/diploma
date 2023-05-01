import { FC } from 'react'
import { Text, View } from 'react-native'

const SliderHandle: FC = () => {
	return (
		<View
			className='rounded-full border-2 border-white justify-center items-center bg-mDark'
			style={{
				width: 24,
				height: 24,
				transform: [
					{
						translateX: -12
					},
					{ translateY: -10 }
				]
			}}
		>
			<View className='h-1 w-1 rounded-full bg-white' />
		</View>
	)
}

export default SliderHandle
