import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/navbar'

const Main = () => {
	return (
		<div className='app'>
			<Navbar />
			<div className='_container'>
				<Outlet />
			</div>
		</div>
	)
}

export default Main
