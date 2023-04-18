import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import Reducers from './reducers'

const Store = createStore(Reducers, applyMiddleware(thunk))

// const getToken = () => Store?.getState()?.generalState?.token
// const getRefreshToken = () => Store?.getState()?.generalState?.refreshToken
// export { Store, getToken, getRefreshToken }
export { Store }
