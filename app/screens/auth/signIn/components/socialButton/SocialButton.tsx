import { FC } from 'react'
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native'

interface ISocialButton {
	title: string
	img: ImageSourcePropType
}

const SocialButton: FC<ISocialButton> = ({ title, img }) => {
	return (
		<View className='my-2 rounded-3xl overflow-hidden'>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255, 0.3)' }}
				className=' py-5 px-4 flex-row w-[150px] justify-center'
				style={{
					backgroundColor: 'rgba(255,255,255, 0.1)'
				}}
			>
				<Image source={img} className='w-6 h-6 mr-3 rounded-full' />
				<Text className='text-base text-white'>{title}</Text>
			</Pressable>
		</View>
	)
}

export default SocialButton
