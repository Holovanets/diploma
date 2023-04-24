import axios from 'axios'

import Generator from '@/utils/Generator'

import { ApiConstants } from '@/constants'
import { StorageService } from '@/providers'

const getRestourants = async () => {
	console.log('Getting restourants | RestourantService')
	try {
		let restourantResponse = await axios.get(
			`${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.GET_ALL_RESTIKI}`,

			{
				headers: Generator.authHeader(StorageService.getToken()),
				params: {
					limit: 3
				}
			}
		)
		if (restourantResponse?.status === 200) {
			return {
				status: true,
				message: 'Restourant data fetched',
				data: restourantResponse?.data
			}
		} else {
			return {
				status: false,
				message: 'Data not found. st : 200'
			}
		}
	} catch (error) {
		return {
			error,
			status: false,
			message: 'Request Error.'
		}
	}
}
const getRestourantById = async (restID: number) => {
	console.log('Getting restourants | RestourantService')
	try {
		let restourantResponse = await axios.get(
			`${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.GET_RESTIK}/${restID}`,

			{
				headers: Generator.authHeader(StorageService.getToken()),
				params: {
					limit: 3
				}
			}
		)
		if (restourantResponse?.status === 200) {
			return {
				status: true,
				message: 'Restourant data fetched',
				data: restourantResponse?.data
			}
		} else {
			return {
				status: false,
				message: 'Data not found. st : 200'
			}
		}
	} catch (error) {
		return {
			error,
			status: false,
			message: 'Request Error.'
		}
	}
}

export default { getRestourants, getRestourantById }
