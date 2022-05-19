import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/use-app-redux-hooks'
import {
	getPastLaunchesLoaded,
	getPastLaunchesLoadingStatus,
	loadPastLaunchesList,
} from '../store/launch'

interface IProps {
	children: JSX.Element
}

const PastLaunchesLoader = ({ children }: IProps) => {
	const dispatch = useAppDispatch()
	const dataLoaded = useAppSelector(getPastLaunchesLoaded())
	const isLoading = useAppSelector(getPastLaunchesLoadingStatus())

	useEffect(() => {
		if (!dataLoaded) {
			dispatch(loadPastLaunchesList())
		}
	}, [])

	return isLoading ? <p>Loading...</p> : children
}

export default PastLaunchesLoader
