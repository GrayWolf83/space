import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../hooks/use-app-redux-hooks'
import { addBookingLaunch, removeBookingLaunch } from '../../store/launch'
import { Launch } from '../../types/launch'
import { clearHoveredClasses } from '../../utils/clear-hovered-classes'

interface IProps {
	launch: Launch
	draggable: boolean
	dragEndId: string
}

const LaunchCard = ({ launch, draggable, dragEndId }: IProps) => {
	const [dragStart, setDragStart] = useState('')
	const dispatch = useAppDispatch()

	const dragStartHandler = (e: React.DragEvent<HTMLAnchorElement>) => {
		setDragStart(e.currentTarget.closest('.home__inner-item').id)
	}

	const dragEndHandler = (
		e: React.DragEvent<HTMLAnchorElement>,
		id: string,
	) => {
		if (dragStart === 'upcoming' && dragEndId === 'booking') {
			dispatch(addBookingLaunch(id))
			toast.success('Полет успешно забронирован!')
		}

		if (dragStart === 'booking' && dragEndId === 'upcoming') {
			const result = confirm(
				'Вы действительно хотите отменить бронирование?',
			)

			if (result) {
				dispatch(removeBookingLaunch(id))
			}
		}

		clearHoveredClasses()
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
					draggable={false}
					src={launch.links.patch.small || 'images/no-image.png'}
					alt={launch.name}
				/>
				<p>{new Date(launch.date_local).toLocaleDateString()}</p>
			</div>
		</NavLink>
	)
}

export default LaunchCard
