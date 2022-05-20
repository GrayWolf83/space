import React, { useState } from 'react'
import { Launch } from '../../types/launch'
import LaunchCard from './launch-card'
import Pagination from './pagination'

interface IProps {
	launches: Launch[]
	draggable: boolean
	dragEndId: string
}

const LaunchList = ({ launches, draggable, dragEndId }: IProps) => {
	const [pageIndex, setPageIndex] = useState(0)
	const perPage = 3
	const pagesCount = Math.ceil(launches.length / perPage)

	const paginationLaunches = launches.slice(
		pageIndex * perPage,
		pageIndex * perPage + perPage,
	)

	return pagesCount === 0 ? null : (
		<div className='launch-list'>
			{paginationLaunches.map((item) => (
				<LaunchCard
					dragEndId={dragEndId}
					launch={item}
					draggable={draggable}
					key={item.id}
				/>
			))}
			<Pagination
				pageIndex={pageIndex}
				pagesCount={pagesCount}
				changePageIndex={setPageIndex}
			/>
		</div>
	)
}

export default LaunchList
