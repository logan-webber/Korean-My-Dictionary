import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Dropdown from './Dropdown'
import { logoutUser } from '../actions/auth'

function Nav({ props, auth, logout }) {

	const [click, setClick] = useState(false)
	const [dropdown, setDropdown] = useState(false)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false)
		} else {
			setDropdown(true)
		}
	}

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false)
		} else {
			setDropdown(false)
		}
	}

	return (
		<>
			<nav className='navbar'>
				{!auth.isAuthenticated &&
					<>
						<Link to='/login' className='navbar-logo'>
							Login
						</Link>
						<Link to='/signup' className='navbar-logo'>
							Signup
						</Link>
					</>
				}
				{auth.isAuthenticated &&
					<>
						<Link to='/' onClick={() => logout()} className='navbar-logo'>
							Logout
						</Link>
					</>
				}
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
						<Link to='/' className='nav-links' onClick={closeMobileMenu}>
							Your Dictionary <i className='fas fa-caret-down' />
						</Link>
						{dropdown && <Dropdown />}
					</li>
				</ul>
			</nav>
		</>
	)

}


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		logout: () => {
			// I cannot use history outside of a component function and as a result i am using a link to redirect on logout and I dont need
			// the confirmSuccess function at this time. I may need it to deploy.
			// const confirmSuccess = () => ownProps.history.push('/')
			dispatch(logoutUser())
		}
	}
}

const mapStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)