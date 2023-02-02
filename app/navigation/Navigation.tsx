import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'

import PrivateNavigation from './PrivateNavigation'

const Navigation: FC = () => {
	return (
		<>
			{/* <NavigationContainer ref={navRef}> */}
			<NavigationContainer>
				<PrivateNavigation />
			</NavigationContainer>
			{/* {user && currentRoute && <Text>{currentRoute} </Text>} */}
		</>
	)
}

export default Navigation
