import { FC } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
	BoxLikeButton,
	BoxLocButton,
	BoxSearchButton,
	HeaderImage
} from './components'
import { GoBackButton } from '@/components'
import { ScreenProps } from '@/types'

interface IPlace extends ScreenProps {
	route: {
		params: {
			id: number
			cover: string
		}
	}
}

const PlaceScreen: FC<IPlace> = ({
	navigation,
	route: {
		params: { id, cover }
	}
}) => {
	return (
		<ImageBackground
			source={require('../../../assets/images/bckg.png')}
			resizeMode='cover'
			className='flex-1'
		>
			<SafeAreaView className='flex-1 px-6 pt-7'>
				<HeaderImage {...{ cover }} />

				<View className='flex-row w-full justify-between'>
					<View className='justify-left'>
						<GoBackButton callback={navigation.goBack} />
					</View>
					<View className='justify-right flex-row'>
						<BoxLocButton callback={() => console.log('lol')} />
						<BoxSearchButton callback={() => console.log('lol')} />
						<BoxLikeButton callback={() => console.log('lol')} />
					</View>
				</View>
			</SafeAreaView>
		</ImageBackground>
	)
}

export default PlaceScreen
