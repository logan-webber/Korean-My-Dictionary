import React, { useState } from 'react'
import { connect } from 'react-redux'

function Nav(props) {
	return (
		<>
			{/* <h1>nav</h1> */}
			<nav className='navbar'>
				<ul className='navbar-nav'></ul>
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