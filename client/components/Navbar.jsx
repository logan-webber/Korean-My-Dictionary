import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Dropdown from './Dropdown'

function Nav(props) {

	const [click, setClick] = useState(false)
	const [dropdown, setDropdown] =useState(false)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const onMouseEnter = () => {
		if(window.innerWidth < 960) {
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
				<Link to='/login' className='navbar-logo'>
					Login
				</Link>
				<Link to='/signup' className='navbar-logo'>
					Signup
				</Link>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					{/* <li className='nav-item'>
						<Link to='/listofwords' className='nav-links' onClick={closeMobileMenu}>
							Your Words
						</Link>
					</li> */}
					<li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
						<Link to='/' className='nav-links' onClick={closeMobileMenu}>
							Your Dictionary <i className='fas fa-caret-down' />
						</Link>
						{dropdown && <Dropdown/>}
					</li>
				</ul>
			</nav>
		</>
	)

}

const mapStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapStateToProps)(Nav)