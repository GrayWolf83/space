import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DataLoader from './dataLoaders'
import Main from './layouts/main'
import About from './pages/about'
import Home from './pages/home'
import Launch from './pages/launch'

const App = () => {
	return (
		<>
			<DataLoader>
				<Routes>
					<Route path='/' element={<Main />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='launch/:launchId' element={<Launch />} />
						<Route path='*' element={<Home />} />
					</Route>
				</Routes>
			</DataLoader>
			<ToastContainer />
		</>
	)
}

export default App
