import axios from 'axios'

import Generator from '@/utils/Generator'

import { ApiConstants } from '@/constants'
import { StorageService } from '@/providers'

const RestikRequest = axios.create({
	baseURL: ApiConstants.BACKEND_API.BASE_API_URL
})

const getBestRestourants = async () => {
	console.log('Getting restourants | RestourantService')
	try {
		let restourantResponse = await axios.get(
			`${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.GET_BEST_RESTIKI}`,

			{
				headers: Generator.authHeader(StorageService.getToken()),
				params: {
					limit: 5
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
const getNearestRestourants = async () => {
	console.log('Getting restourants | RestourantService')
	try {
		let restourantResponse = await axios.get(
			`${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.GET_NEAREST}`,

			{
				headers: Generator.authHeader(StorageService.getToken()),
				params: {
					limit: 5,
					geolng: 14,
					geolat: 12
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
const isRestikLiked = async (restID: number) => {
	try {
		let restourantResponse = await axios.get(
			`${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.IS_RESTIK_LIKED}/${restID}`,

			{
				headers: Generator.authHeader(StorageService.getToken())
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
const toggleRestikLike = async (restID: number) => {
	try {
		let tokenResponse = await RestikRequest.post(
			ApiConstants.BACKEND_API.TOGGLE_RESTIK_LIKE,
			{ restikId: restID, action: 'toggle' },
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
const getRestourantById = async (restID: number) => {
	console.log(`Getting single restourant with id ${restID} | RestourantService`)
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

export default {
	getBestRestourants,
	getRestourantById,
	getNearestRestourants,
	isRestikLiked,
	toggleRestikLike
}
