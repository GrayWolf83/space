import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './error'
import launchReducer from './launch'

const store = configureStore({
	reducer: {
		errors: errorReducer,
		launches: launchReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
