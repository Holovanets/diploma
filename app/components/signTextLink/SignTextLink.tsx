import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

const SignTextLink: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Pressable className=' self-center'>
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
