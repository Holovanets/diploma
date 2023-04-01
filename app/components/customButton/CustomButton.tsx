import cn from 'clsx'
import LottieView from 'lottie-react-native'
import { FC, PropsWithChildren, useState } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

import { Images } from '@/constants'

interface IButton extends PressableProps {
	customClassName?: string | undefined
	loading?: boolean
}

const CustomButton: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	customClassName,
	loading,
	...rest
}) => {
	const [textWidth, setTextWidth] = useState({})

	return (
		<View
			className={cn(
				'rounded-2xl justify-center overflow-hidden bg-primary h-18',
				customClassName
			)}
		>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				className={cn(' pt-4 pb-5 bg-accentRed px-12', className)}
				{...rest}
			>
				{loading ? (
					<View
						className='h-8 overflow-hidden items-center justify-center'
						style={textWidth}
					>
						<LottieView source={Images.BEACON_LOADING_ANIM} autoPlay loop />
					</View>
				) : (
					<Text
						onLayout={({
							nativeEvent: {
								layout: { width }
							}
						}) => setTextWidth({ width })}
						className='font-black text-white text-2xl text-center '
					>
						{children}
					</Text>
				)}
			</Pressable>
		</View>
	)
}

export default CustomButton
