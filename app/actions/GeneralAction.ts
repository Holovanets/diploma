import GeneralActionTypes from './GeneralActionTypes'
import { AuthService, StorageService, UserService } from '@/providers'

const setIsAppLoading = (isAppLoading: boolean) => {
	return {
		type: GeneralActionTypes.types.SET_IS_APP_LOADING,
		payload: isAppLoading
	}
}
const setToken = (token: string) => {
	return {
		type: GeneralActionTypes.types.SET_TOKEN,
		payload: token
	}
}
const setRefreshToken = (refToken: string) => {
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

const appStart = () => {
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
					console.log(`userResponse: `)
					console.log(userResponse)
					if (userResponse?.status) {
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
					} else if (userResponse?.message === 'TokenExpiredError') {
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
	setRefreshToken
}
