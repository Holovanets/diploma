import { FC } from 'react'
import { Text, View } from 'react-native'

interface IHandle {
	count: number
	max: number
}

const SliderHandle: FC<IHandle> = ({ count, max }) => {
	return (
		<View
			className='rounded-full border-white justify-center items-center bg-accentRed'
			style={{
				width: 48,
				height: 48,
				transform: [
					{
						translateX: -24
					},
					{ translateY: -20 }
				]
			}}
		>
			{/* <View className='h-1 w-1 rounded-full bg-white' /> */}
			<Text className='text-white font-bold'>
				{count === max ? `${count}+` : `${count}`}
			</Text>
			{/* <Text className='text-white font-bold'>{count}</Text> */}
		</View>
	)
}

export default SliderHandle
