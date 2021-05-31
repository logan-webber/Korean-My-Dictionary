import React, { useState } from 'react'
import { connect } from 'react-redux'

function Nav(props) {
	return (
		<>
			<nav className='navbar'>
				<ul className='navbar-nav'>
					{/* <li className='navbar-list'>
						<a href='#' className='navbar-a'></a>
					</li> */}
					{props.children}
				</ul>
			</nav>
		</>
	)

}

function NavItem(props) {
	return (
		<>
			<li className='navbar-list'>
				<a href='#' className='navbar-a'>
					{ props.icon }
				</a>
			</li>
		</>
	)
}






const mapStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapStateToProps)(Nav, NavItem)