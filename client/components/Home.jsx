import React from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'

function Home({auth}) {

	return (
		<>
			<h1 className='title'>Welcome to My Dictionary! </h1>
			{auth.isAuthenticated &&
				<>
				
				</>
			}
			{!auth.isAuthenticated &&
				<>
			
				</>

			}
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		words: globalState.words,
		auth: globalState.auth
	}
}

export default connect(mapStateToProps)(Home)
