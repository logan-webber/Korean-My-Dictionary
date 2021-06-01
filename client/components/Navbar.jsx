import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from './Button'
import Dropdown from './Dropdown'

function Nav(props) {
	return (
		<>
		
		</>
	)

}







const mapStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapStateToProps)(Nav)