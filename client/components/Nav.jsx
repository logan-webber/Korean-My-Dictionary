import React, { useState } from 'react'
import { connect } from 'react-redux'

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