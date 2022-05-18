import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './error'

const store = configureStore({
	reducer: {
		errors: errorReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
