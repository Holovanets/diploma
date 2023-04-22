import { FC } from 'react'
import { Image, Text, View } from 'react-native'

import { Images } from '@/constants'
import { Display } from '@/utils'

const WelcomeCard: FC<IWelcomeContent> = ({ title, content, image }) => {
	return (
		<View
			className='flex-1 justify-center items-center px-7'
			style={{
				width: Display.setWidth(100)
			}}
		>
			<Image
				source={Images[image]}
				resizeMode='contain'
				className='flex-initial'
				style={{
					height: Display.setHeight(40),
					width: Display.setWidth(80)
				}}
			/>
			<View className='flex-initial my-10'>
				<Text className='text-3xl font-black text-center text-white'>
					{title}
				</Text>
				<Text className='text-lg font-light align-center text-white text-center my-5'>
					{content}
				</Text>
			</View>
		</View>
	)
}

export default WelcomeCard
