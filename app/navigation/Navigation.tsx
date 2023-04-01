import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PrivateNavigation from './PrivateNavigation'
import { GeneralAction } from '@/actions'

interface INavProps {
	token?: string
}
const Navigation: FC<INavProps> = () => {
	const { isAppLoading, token, isFirstTimeUse } = useSelector(
		state => state?.generalState
	)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(GeneralAction.appStart())
	}, [])

	console.log(token)

	return (
		<>
			{/* <NavigationContainer ref={navRef}> */}
			<NavigationContainer>
				<PrivateNavigation {...{ token, isAppLoading, isFirstTimeUse }} />
			</NavigationContainer>
			{/* {user && currentRoute && <Text>{currentRoute} </Text>} */}
		</>
	)
}

export default Navigation
