import axios from 'axios'

import { Generator } from '../utils'

import StorageService from './StorageService'
import { ApiConstants } from '@/constants'
// import { getRefreshToken, getToken } from '../Store'
import { IAuthFormData, IBaseFields, IFinalFields } from '@/types'

const AuthRequest = axios.create({
	baseURL: ApiConstants.BACKEND_API.BASE_API_URL
})

const checkUserExist = async (valUser: IBaseFields) => {
	try {
		let params = valUser
		console.log(
			`Params ${params.email}, ${params.username}, ${params.password}`
		)

		let userCheckResponse = await AuthRequest.get(
			ApiConstants.BACKEND_API.REG_VALIDATE,
			{ params }
		)
		// console.log(userCheckResponse)
		return { status: true, ...userCheckResponse?.data }
	} catch (error: any) {
		// console.log(`Error ${error.response?.data?.error}`)

		return { status: false, message: error.response?.data?.error }
	}
}

const register = async (user: IFinalFields) => {
	if (
		!user?.username ||
		!user?.email ||
		!user?.password ||
		!user?.name ||
		!user?.surname
	) {
		return { status: false, message: 'Пожалуйста заполните все поля' }
	}
	let requestBody = {
		username: user?.username,
		email: user?.email,
		password: user?.password,
		name: user?.name,
		surname: user?.surname
	}
	try {
		let registerResponse = await AuthRequest.post(
			ApiConstants.BACKEND_API.REGISTER,
			requestBody
		)
		console.log(
			` response data: ${registerResponse?.data}, url: ${ApiConstants.BACKEND_API.REGISTER}`
		)
		return { status: true, ...registerResponse?.data }
	} catch (error) {
		console.log(
			` response error: ${error}, url: ${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.REGISTER}`
		)
		console.log(requestBody)

		return { status: false, message: 'Упс. Дідько, помилка!' }
	}
}
const login = async (user: IAuthFormData) => {
	if (!user?.email || !user?.password) {
		return { status: false, message: 'Пожалуйста заполните все поля' }
	}
	try {
		let requestBody = {
			email: user?.email,
			password: user?.password
		}
		let loginResponse = await AuthRequest.post(
			ApiConstants.BACKEND_API.LOGIN,
			requestBody
		)
		console.log(loginResponse?.data)

		return { status: true, ...loginResponse?.data }
	} catch (error) {
		console.log(error)
		return { status: false, message: 'Упс. Дідько, помилка!' }
	}
}
const refreshToken = async () => {
	console.log('Токен рефрешнулся | providers -> AuthService')

	try {
		let tokenResponse = await AuthRequest.post(
			ApiConstants.BACKEND_API.REFRESH_TOKEN,
			{ refresh_token: StorageService.getRefreshToken() },
			{ headers: Generator.authHeader(StorageService.getToken()) }
		)
		if (tokenResponse?.status === 200) {
			return { status: true, data: tokenResponse?.data }
		} else {
			return { status: false }
		}
	} catch (error) {
		console.log(error)
		return { status: false, message: 'Упс. Дідько, помилка!' }
	}
}

export default { register, login, checkUserExist, refreshToken }
