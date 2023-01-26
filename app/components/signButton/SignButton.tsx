import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface IButton extends PressableProps {}

const SignButton: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<View className='rounded-3xl justify-center  overflow-hidden bg-primary  my-4 '>
			<Pressable
				android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
				className={cn(' pt-4 pb-5 bg-accentRed px-12', className)}
				{...rest}
			>
				<Text className='font-black text-white text-2xl'>{children}</Text>
			</Pressable>
		</View>
	)
}

export default SignButton
