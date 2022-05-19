import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataLoader from './dataLoaders'
import Main from './layouts/main'
import About from './pages/about'
import Home from './pages/home'
import Launch from './pages/launch'

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<DataLoader>
						<Main />
					</DataLoader>
				}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='launch/:launchId' element={<Launch />} />
				<Route path='*' element={<Home />} />
			</Route>
		</Routes>
	)
}

export default App
