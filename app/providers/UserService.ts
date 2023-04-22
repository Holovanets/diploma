import axios from 'axios'

import { Generator } from '../utils'

import StorageService from './StorageService'
import { ApiConstants } from '@/constants'

const getUserData = async () => {
	// console.log('User Service | getUserData')
	try {
		let userResponse = await axios.get(
			`${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.GET_USER}`,
			{
				headers: Generator.authHeader(StorageService.getToken())
			}
		)
		if (userResponse?.status === 200) {
			console.log('User data Fetched')

			return {
				status: true,
				message: 'User data fetched.',
				data: userResponse?.data
			}
		} else {
			return {
				status: false,
				message: 'User data fetch error. Data not found.'
			}
		}
	} catch (error) {
		console.log(`user data error ${error}`)

		return {
			status: false,
			message: 'User data fetch error.',
			error
		}
	}
}
export default { getUserData }
