import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/use-app-redux-hooks'
import { getLaunchById } from '../store/launch'

const Launch = () => {
	const { launchId } = useParams()
	const launch = useAppSelector(getLaunchById(launchId))

	return (
		<div className='launch mt-2'>
			<div className='launch__image-block'>
				<img
					className='launch__image-item'
					src={launch.links.patch.small || '/images/no-image.png'}
					alt={launch.name}
				/>
			</div>
			<div className='launch__text-block'>
				<h3 className='title launch__title'>{launch.name}</h3>
				<p>flight number: {launch.flight_number}</p>
				<p>
					flight date:{' '}
					{new Date(launch.date_local).toLocaleDateString()}
				</p>
				<p>details: {launch.details}</p>
			</div>
		</div>
	)
}

export default Launch
