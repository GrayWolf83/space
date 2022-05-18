import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='_container'>
				<div className='navbar__inner px-1'>
					<div className='logo'>
						<h2 className='logo__title'>Space</h2>
					</div>

					<div className='menu'>
						<ul className='menu__list'>
							<li className='menu__item'>
								<NavLink to='/' className='menu__link'>
									Главная
								</NavLink>
							</li>
							<li className='menu__item'>
								<NavLink to='/about' className='menu__link'>
									О приложении
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
