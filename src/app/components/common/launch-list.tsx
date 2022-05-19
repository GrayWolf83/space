import React from 'react'
import { Launch } from '../../types/launch'
import LaunchCard from './launch-card'

interface IProps {
	launches: Launch[]
	draggable: boolean
	elementId: string
}

const LaunchList = ({ launches, draggable, elementId }: IProps) => {
	return (
		<div className='launch-list' id={elementId}>
			{launches.map((item) => (
				<LaunchCard launch={item} draggable={draggable} key={item.id} />
			))}
		</div>
	)
}

export default LaunchList
