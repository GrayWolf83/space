import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/ui/navbar'
import Main from './layouts/main'
import About from './pages/about'
import Home from './pages/home'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
			</Route>
		</Routes>
	)
}

export default App
