import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Launch } from './../types/launch'
import launchesService from '../services/launches.service'

type launcheState = {
	upcoming: {
		entities: Launch[]
		dataLoaded: boolean
		isLoading: boolean
	}
	past: {
		entities: Launch[]
		dataLoaded: boolean
		isLoading: boolean
	}
	booking: {
		entities: Launch[]
	}
}

const initialState: launcheState = {
	upcoming: {
		entities: [],
		dataLoaded: false,
		isLoading: true,
	},
	past: {
		entities: [],
		dataLoaded: false,
		isLoading: true,
	},
	booking: {
		entities: [],
	},
}

const launchSlice = createSlice({
	name: 'launches',
	initialState,
	reducers: {
		upcomingLaunchesLoaded(state, action: PayloadAction<Launch[]>) {
			state.upcoming.entities = action.payload
			state.upcoming.dataLoaded = true
		},
		pastLaunchesLoaded(state, action: PayloadAction<Launch[]>) {
			state.past.entities = action.payload
			state.past.dataLoaded = true
		},
		upcomingLoadingEnd(state) {
			state.upcoming.isLoading = false
		},
		pastLoadingEnd(state) {
			state.past.isLoading = false
		},
		bookingLaunchAdded(state, action: PayloadAction<string>) {
			state.booking.entities = [
				...state.booking.entities,
				state.upcoming.entities.find(
					(item) => item.id === action.payload,
				),
			]

			state.upcoming.entities = state.upcoming.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		bookingLaunchRemoved(state, action: PayloadAction<string>) {
			state.upcoming.entities = [
				...state.upcoming.entities,
				state.booking.entities.find(
					(item) => item.id === action.payload,
				),
			]

			state.booking.entities = state.booking.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
	},
})

const {
	upcomingLaunchesLoaded,
	pastLaunchesLoaded,
	upcomingLoadingEnd,
	pastLoadingEnd,
	bookingLaunchAdded,
	bookingLaunchRemoved,
} = launchSlice.actions

export const loadUpcomingLaunchesList = () => async (dispatch: AppDispatch) => {
	try {
		const payload = await launchesService.getUpcomingLaunches()
		dispatch(upcomingLaunchesLoaded(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(upcomingLoadingEnd())
	}
}

export const loadPastLaunchesList = () => async (dispatch: AppDispatch) => {
	try {
		const payload = await launchesService.getPastLaunches()
		dispatch(pastLaunchesLoaded(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(pastLoadingEnd())
	}
}

export const getUpcomingLaunchesList = () => (state: RootState) => {
	return state.launches.upcoming.entities
}

export const getPastLaunchesList = () => (state: RootState) => {
	return state.launches.past.entities
}

export const getBookingLaunchesList = () => (state: RootState) => {
	return state.launches.booking.entities
}

export const getUpcomingLaunchesLoaded = () => (state: RootState) => {
	return state.launches.upcoming.dataLoaded
}

export const getUpcomingLaunchesLoadingStatus = () => (state: RootState) => {
	return state.launches.upcoming.isLoading
}

export const getPastLaunchesLoaded = () => (state: RootState) => {
	return state.launches.past.dataLoaded
}

export const getPastLaunchesLoadingStatus = () => (state: RootState) => {
	return state.launches.past.isLoading
}

export const addBookingLaunch = (id: string) => (dispatch: AppDispatch) => {
	dispatch(bookingLaunchAdded(id))
}

export const removeBookingLaunch = (id: string) => (dispatch: AppDispatch) => {
	dispatch(bookingLaunchRemoved(id))
}

export const getLaunchById = (id: string) => (state: RootState) => {
	const launchPast = state.launches.past.entities.find(
		(item) => item.id === id,
	)
	const launchUpcoming = state.launches.upcoming.entities.find(
		(item) => item.id === id,
	)
	const launchBooking = state.launches.booking.entities.find(
		(item) => item.id === id,
	)

	return launchPast || launchUpcoming || launchBooking
}

export default launchSlice.reducer
