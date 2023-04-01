import { StorageService } from '@/providers'

const types = {
	SET_IS_APP_LOADING: 'SET_IS_APP_LOADING',
	SET_TOKEN: 'SET_TOKEN',
	SET_FIRST_TIME_USE: 'SET_FIRST_TIME_USE'
}

const setIsAppLoading = (isAppLoading: boolean) => {
	return {
		type: types.SET_IS_APP_LOADING,
		payload: isAppLoading
	}
}
const setToken = (token: string) => {
	return {
		type: types.SET_TOKEN,
		payload: token
	}
}
const setIsFirstTimeUse = () => {
	return {
		type: types.SET_IS_APP_LOADING,
		payload: false
	}
}

const appStart = () => {
	return (dispatch: any, getState: any) => {
		StorageService.getFirstTimeUse().then(isFirstTimeUse => {
			dispatch({
				type: types.SET_FIRST_TIME_USE,
				payload: isFirstTimeUse ? false : true
			})
		})
		StorageService.getToken().then(token => {
			if (token) {
				dispatch({
					type: types.SET_TOKEN,
					payload: token
				})
			}
		})
		dispatch({
			type: types.SET_IS_APP_LOADING,
			payload: false
		})
	}
}

export default { setIsAppLoading, setToken, types, appStart, setIsFirstTimeUse }
