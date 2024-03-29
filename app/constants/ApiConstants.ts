const config = require('../../package.json').projectConfig

const BACKEND_BASE_URL = config.backendApiBaseUrl

const COUNTRY_FLAG = {
	BASE_URL: `https://www.countryflagicons.com`,
	SIZE: { 16: '16', 24: '24', 32: '32', 48: '48', 64: '64' },
	STYLE: { FLAT: 'FLAT', SHINY: 'SHINY' }
}

const BACKEND_API = {
	BASE_API_URL: `${BACKEND_BASE_URL}/api`,
	REGISTER: '/auth/register',
	REG_VALIDATE: '/auth/register/validate',
	LOGIN: '/auth/login',
	REFRESH_TOKEN: '/auth/tokens/refresh',
	GET_USER: '/users/me',
	GET_BEST_RESTIKI: '/restiki/best',
	GET_NEAREST: '/restiki/nearest',
	GET_RESTIK: '/restiki/get',
	IS_RESTIK_LIKED: '/restiki/like',
	TOGGLE_RESTIK_LIKE: 'restiki/like'
}

export default { COUNTRY_FLAG, BACKEND_API }
