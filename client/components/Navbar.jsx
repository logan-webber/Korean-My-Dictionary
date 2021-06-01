import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from './Button'
import Dropdown from './Dropdown'

function Nav(props) {

	const [click, setClick] = useState(false)

	const handleClick = () => setClick(!click)
		
	

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