import React from 'react'
import LaunchList from '../components/common/launch-list'
import { useAppDispatch, useAppSelector } from '../hooks/use-app-redux-hooks'
import {
	getBookingLaunchesList,
	getPastLaunchesList,
	getUpcomingLaunchesList,
} from '../store/launch'

const Home = () => {
	const dispatch = useAppDispatch()
	const pastList = useAppSelector(getPastLaunchesList())
	const upcomingList = useAppSelector(getUpcomingLaunchesList())
	const bookingList = useAppSelector(getBookingLaunchesList())

	return (
		<div className='home'>
			<h2 className='title home__title'>Explore the space</h2>
			<div className='home__inner'>
				<div className='home__inner-item home__inner-item--past'>
					<h3 className='subtitle home__inner-item-subtitle'>
						Past launches
					</h3>
					<div className='home__inner-item-body'>
						<LaunchList
							elementId='past'
							draggable={false}
							launches={pastList}
						/>
					</div>
				</div>
				<div className='home__inner-item'>
					<h3 className='subtitle home__inner-item-subtitle'>
						Launches
					</h3>
					<div className='home__inner-item-body'>
						<LaunchList
							elementId='upcoming'
							draggable={true}
							launches={upcomingList}
						/>
					</div>
				</div>
				<div className='home__inner-item'>
					<h3 className='subtitle home__inner-item-subtitle'>
						My launches
					</h3>
					<div className='home__inner-item-body'>
						<LaunchList
							elementId='booking'
							draggable={true}
							launches={bookingList}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
