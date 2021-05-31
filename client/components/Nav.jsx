import React, { useState } from 'react'
import { connect } from 'react-redux'

function Nav(props) {
	return (
		<>
			<nav className='dropdown'>
				<ul className='list'>

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