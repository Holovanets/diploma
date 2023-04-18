import { GeneralActionTypes } from '@/actions'

const initialState = {
	isAppLoading: true,
	token: '',
	refreshToken: '',
	isFirstTimeUse: true,
	userData: {}
}
const GeneralReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GeneralActionTypes.types.SET_IS_APP_LOADING:
			return { ...state, isAppLoading: action.payload }
		case GeneralActionTypes.types.SET_TOKEN:
			return { ...state, token: action.payload }
		case GeneralActionTypes.types.SET_REFRESH_TOKEN:
			return { ...state, refreshToken: action.payload }
		case GeneralActionTypes.types.SET_FIRST_TIME_USE:
			return { ...state, isFirstTimeUse: action.payload }
		case GeneralActionTypes.types.SET_USER_DATA:
			return { ...state, userData: action.payload }
		default:
			return state
	}
}
export default GeneralReducer
