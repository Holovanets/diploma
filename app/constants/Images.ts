import { AnimationObject } from 'lottie-react-native'
import { ImageSourcePropType } from 'react-native'

const baza: {
	[key: string]: ImageSourcePropType | string | AnimationObject | any
} = {
	FACEBOOK_LOGO: require('@/assets/images/logos/FACEBOOK.png'),
	GOOGLE_LOGO: require('@/assets/images/logos/GOOGLE.png'),
	WELCOME_PIC_1: require('@/assets/images/WELCOME_PIC_1.png'),
	WELCOME_PIC_2: require('@/assets/images/WELCOME_PIC_2.png'),
	WELCOME_PIC_3: require('@/assets/images/WELCOME_PIC_3.png'),
	AVATAR: require('@/assets/images/ava.png'),
	PATTERN: require('@/assets/images/Pattern.png'),
	PLACE_LOGO: require('@/assets/images/placeLogo.png'),
	LOADING_ANIM: require('@/assets/images/load.json'),
	BEACON_LOADING_ANIM: require('@/assets/images/beacon_load.json'),
	BEACON_LOADING_ANIM_OFF: require('@/assets/images/beacon_load_offline.json'),
	BEACON_LOADING_ANIM_ON: require('@/assets/images/beacon_load_online.json'),
	VILKA_ANIM: require('@/assets/images/vilka_red.json'),
	LOAD_ANIM: require('@/assets/images/load.json')
}
export default baza
