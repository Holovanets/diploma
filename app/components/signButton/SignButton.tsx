import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

interface IButton extends PressableProps {}

const SignButton: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<Pressable
			className={cn(
				'self-center rounded-3xl pt-4 pb-5 my-2 bg-accentRed px-12',
				className
			)}
			{...rest}
		>
			<Text className='font-black text-white text-2xl'>{children}</Text>
		</Pressable>
	)
}

export default SignButton
