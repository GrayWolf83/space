import React, { useEffect } from 'react'
import Loader from '../components/common/loader'
import { useAppDispatch, useAppSelector } from '../hooks/use-app-redux-hooks'
import {
	getUpcomingLaunchesLoaded,
	getUpcomingLaunchesLoadingStatus,
	loadUpcomingLaunchesList,
} from '../store/launch'

interface IProps {
	children: JSX.Element
}

const UpcomingLaunchesLoader = ({ children }: IProps) => {
	const dispatch = useAppDispatch()
	const dataLoaded = useAppSelector(getUpcomingLaunchesLoaded())
	const isLoading = useAppSelector(getUpcomingLaunchesLoadingStatus())

	useEffect(() => {
		if (!dataLoaded) {
			dispatch(loadUpcomingLaunchesList())
		}
	}, [])

	return isLoading ? <Loader /> : children
}

export default UpcomingLaunchesLoader
