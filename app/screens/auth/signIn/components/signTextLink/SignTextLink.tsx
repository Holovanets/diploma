import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

interface SignTextLinkProps {
	callback: () => void
}

const SignTextLink: FC<PropsWithChildren<SignTextLinkProps>> = ({
	children,
	callback
}) => {
	return (
		<Pressable className=' self-center' onPress={callback}>
			<Text
				className='text-accentRed text-base '
				style={{
					borderBottomColor: '#C1272D',
					borderBottomWidth: 2
				}}
			>
				{children}
			</Text>
		</Pressable>
	)
}

export default SignTextLink
