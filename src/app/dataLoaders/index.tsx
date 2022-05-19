import React from 'react'
import PastLaunchesLoader from './past-launches-loader'
import UpcomingLaunchesLoader from './upcoming-launches-loader'

interface IProps {
	children: JSX.Element
}

const DataLoader = ({ children }: IProps) => {
	return (
		<>
			<UpcomingLaunchesLoader>
				<PastLaunchesLoader>{children}</PastLaunchesLoader>
			</UpcomingLaunchesLoader>
		</>
	)
}

export default DataLoader
