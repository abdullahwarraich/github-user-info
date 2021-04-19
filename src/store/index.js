import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger' //Adding redux logger

import reducer from './reducer'

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})
