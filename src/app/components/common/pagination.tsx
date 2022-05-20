import React from 'react'

interface IProps {
	pageIndex: number
	pagesCount: number
	changePageIndex: React.Dispatch<number>
}

const Pagination = ({ pageIndex, pagesCount, changePageIndex }: IProps) => {
	const changePageIndexHandler = (num: number) => {
		if (num === pagesCount || num < 0) return

		changePageIndex(num)
	}

	return (
		<div className='pagination'>
			<button
				className='pagination__button'
				onClick={() => changePageIndexHandler(pageIndex - 1)}
				disabled={pageIndex - 1 < 0}>
				{' '}
				{'<'}{' '}
			</button>
			<p className='subtitle pagination__text'>
				{pageIndex + 1 + ' / ' + pagesCount}
			</p>
			<button
				className='pagination__button'
				onClick={() => changePageIndexHandler(pageIndex + 1)}
				disabled={pageIndex + 1 >= pagesCount}>
				{' '}
				{'>'}{' '}
			</button>
		</div>
	)
}

export default Pagination
