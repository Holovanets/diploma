import AsyncStorage from '@react-native-async-storage/async-storage'

import GeneralActionTypes from './GeneralActionTypes'
import { AuthService, StorageService, UserService } from '@/providers'

const setIsAppLoading = (isAppLoading: boolean) => {
	return {
		type: GeneralActionTypes.types.SET_IS_APP_LOADING,
		payload: isAppLoading
	}
}
const setToken = (token: string) => {
	console.log('auth token set to', token, 'actions -> GeneralAction')

	return {
		type: GeneralActionTypes.types.SET_TOKEN,
		payload: token
	}
}
const setRefreshToken = (refToken: string) => {
	console.log('refresh token set to', refToken, 'actions -> GeneralAction')
	return {
		type: GeneralActionTypes.types.SET_REFRESH_TOKEN,
		payload: refToken
	}
}
const setIsFirstTimeUse = () => {
	console.log('SetIsFirstTimeUse to false')
	return {
		type: GeneralActionTypes.types.SET_FIRST_TIME_USE,
		payload: false
	}
}
const setUserData = (userData: any) => {
	console.log('set UserData')
	return {
		type: GeneralActionTypes.types.SET_USER_DATA,
		payload: userData
	}
}

const appStart = () => {
	StorageService.getToken().then(res => console.log('auth token = ', res))
	StorageService.getRefreshToken().then(res =>
		console.log('refresh token = ', res)
	)
	return (dispatch: any, getState: any) => {
		StorageService?.getFirstTimeUse().then(isFirstTimeUse => {
			dispatch({
				type: GeneralActionTypes.types.SET_FIRST_TIME_USE,
				payload: isFirstTimeUse ? false : true
			})
		})
		StorageService?.getToken().then(token => {
			if (token) {
				dispatch({
					type: GeneralActionTypes.types.SET_TOKEN,
					payload: token
				})
				UserService?.getUserData().then(userResponse => {
					if (userResponse?.status) {
						console.log(userResponse?.status)
						dispatch({
							type: GeneralActionTypes.types.SET_USER_DATA,
							payload: userResponse?.data
						})
						// dispatch(CartAction.getCartItems());
						// dispatch(BookmarkAction.getBookmarks());
						dispatch({
							type: GeneralActionTypes.types.SET_IS_APP_LOADING,
							payload: false
						})
					} else if (!userResponse?.status) {
						console.log('refreshing token')

						AuthService?.refreshToken().then(tokenResponse => {
							if (tokenResponse?.status) {
								dispatch({
									type: GeneralActionTypes.types.SET_TOKEN,
									payload: tokenResponse?.data
								})
								UserService?.getUserData().then(userResponse => {
									if (userResponse?.status) {
										dispatch({
											type: GeneralActionTypes.types.SET_USER_DATA,
											payload: userResponse?.data
										})
										dispatch({
											type: GeneralActionTypes.types.SET_IS_APP_LOADING,
											payload: false
										})
									}
								})
							}
						})
					} else {
						console.log('dispatch token to ""')

						dispatch({
							type: GeneralActionTypes.types.SET_TOKEN,
							payload: ''
						})
						dispatch({
							type: GeneralActionTypes.types.SET_IS_APP_LOADING,
							payload: false
						})
					}
				})
			}
			dispatch({
				type: GeneralActionTypes.types.SET_IS_APP_LOADING,
				payload: false
			})
		})
	}
}

export default {
	setIsAppLoading,
	setToken,
	appStart,
	setIsFirstTimeUse,
	setRefreshToken,
	setUserData
}
