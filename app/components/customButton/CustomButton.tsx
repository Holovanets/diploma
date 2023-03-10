import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface IButton extends PressableProps {
	customClassName?: string | undefined
}

const CustomButton: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	customClassName,
	...rest
}) => {
	return (
		<View
			className={cn(
				'rounded-2xl justify-center overflow-hidden bg-primary',
				customClassName
			)}
		>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				className={cn(' pt-4 pb-5 bg-accentRed px-12', className)}
				{...rest}
			>
				<Text className='font-black text-white text-2xl text-center'>
					{children}
				</Text>
			</Pressable>
		</View>
	)
}

export default CustomButton
