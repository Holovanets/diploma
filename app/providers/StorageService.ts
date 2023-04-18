import AsyncStorage from '@react-native-async-storage/async-storage'

const setFirstTimeUse = () => {
	return AsyncStorage.setItem('isFirstTimeUse', 'true')
}
const getFirstTimeUse = () => {
	return AsyncStorage.getItem('isFirstTimeUse')
}

const setToken = (token: string) => {
	return AsyncStorage.setItem('token', token)
}
const getToken = () => {
	return AsyncStorage.getItem('token')
}
const setRefreshToken = (refToken: string) => {
	return AsyncStorage.setItem('refreshToken', refToken)
}
const getRefreshToken = () => {
	return AsyncStorage.getItem('refreshToken')
}

export default {
	setFirstTimeUse,
	getFirstTimeUse,
	setToken,
	getToken,
	setRefreshToken,
	getRefreshToken
}
