import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/use-app-redux-hooks'
import { addBookingLaunch } from '../../store/launch'
import { Launch } from '../../types/launch'

interface IProps {
	launch: Launch
	draggable: boolean
}

const LaunchCard = ({ launch, draggable }: IProps) => {
	const dispatch = useAppDispatch()

	const dragStartHandler = (e: React.DragEvent<HTMLAnchorElement>) => {
		// console.log(e.target)
	}

	const dragEndHandler = (
		e: React.DragEvent<HTMLAnchorElement>,
		id: string,
	) => {
		dispatch(addBookingLaunch(id))
	}

	const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
		if (e.currentTarget.nodeName === 'DIV') {
			e.currentTarget.classList.add('hovered')
		}
	}

	const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		if (e.currentTarget.nodeName === 'DIV') {
			e.currentTarget.classList.remove('hovered')
		}
	}

	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	return (
		<NavLink
			to={'/launch/' + launch.id}
			draggable={draggable}
			onDragStart={(e) => dragStartHandler(e)}
			onDragEnd={(e) => dragEndHandler(e, launch.id)}>
			<div className='launch-card'>
				<h4 className='subtitle launch-card__title'>{launch.name}</h4>
				<img
					className='launch-card__image'
					src={launch.links.patch.small || 'no-image.png'}
					alt={launch.name}
				/>
				<p>{new Date(launch.date_local).toLocaleDateString()}</p>
			</div>
		</NavLink>
	)
}

export default LaunchCard
