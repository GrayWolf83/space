import React, { useState } from 'react'
import LaunchList from '../components/common/launch-list'
import { useAppDispatch, useAppSelector } from '../hooks/use-app-redux-hooks'
import {
	getBookingLaunchesList,
	getPastLaunchesList,
	getUpcomingLaunchesList,
} from '../store/launch'
import { clearHoveredClasses } from '../utils/clear-hovered-classes'

const Home = () => {
	const pastList = useAppSelector(getPastLaunchesList())
	const upcomingList = useAppSelector(getUpcomingLaunchesList())
	const bookingList = useAppSelector(getBookingLaunchesList())

	const [dragEnd, setDragEnd] = useState('')

	const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
		setDragEnd(e.currentTarget.id)
		clearHoveredClasses()
		e.currentTarget.classList.add('hovered')
	}

	const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

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
							dragEndId={dragEnd}
							draggable={false}
							launches={pastList}
						/>
					</div>
				</div>
				<div
					className='home__inner-item'
					id='upcoming'
					onDragEnter={(e) => dragEnterHandler(e)}
					onDragLeave={(e) => dragLeaveHandler(e)}>
					<h3 className='subtitle home__inner-item-subtitle'>
						Launches
					</h3>
					<div className='home__inner-item-body'>
						<LaunchList
							dragEndId={dragEnd}
							draggable={true}
							launches={upcomingList}
						/>
					</div>
				</div>
				<div
					className='home__inner-item'
					id='booking'
					onDragEnter={(e) => dragEnterHandler(e)}
					onDragLeave={(e) => dragLeaveHandler(e)}>
					<h3 className='subtitle home__inner-item-subtitle'>
						My launches
					</h3>
					<div className='home__inner-item-body'>
						<LaunchList
							dragEndId={dragEnd}
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
