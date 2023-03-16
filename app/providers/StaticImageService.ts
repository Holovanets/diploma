import { ApiConstants } from '@/constants'

const getFlagIcon = (
	code = 'UA',
	style = ApiConstants.COUNTRY_FLAG.STYLE.FLAT,
	size = ApiConstants.COUNTRY_FLAG.SIZE[64]
) => `${ApiConstants.COUNTRY_FLAG.BASE_URL}/${style}/${size}/${code}.png`
export default { getFlagIcon }
