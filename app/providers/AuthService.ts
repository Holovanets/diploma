import axios from 'axios'

import { ApiConstants } from '@/constants'
import { IAuthFormData, IBaseFields } from '@/types'

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

const register = async (user: IBaseFields) => {
	if (!user?.username || !user?.email || !user?.password) {
		return { status: false, message: 'Пожалуйста заполните все поля' }
	}
	try {
		let requestBody = {
			username: user?.username,
			email: user?.email,
			password: user?.password,
			name: 'Sasha',
			surname: 'Karaguts'
		}
		let registerResponse = await AuthRequest.post(
			ApiConstants.BACKEND_API.REGISTER,
			requestBody
		)
		console.log(registerResponse?.data)

		return registerResponse?.data
	} catch (error) {
		console.log(error)

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
export default { register, login, checkUserExist }
