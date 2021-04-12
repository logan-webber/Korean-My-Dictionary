import React from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/auth'

function Home({auth, logout}) {

	// const [burgerVisible, setBurgerVisible] = useState(false)

	// const toggleBurger = () => {
	// 	setBurgerVisible(currentBurgerState => {
	// 		return !currentBurgerState
	// 	})
	// }


	return (
		<>
			<h1 className='title'>Welcome to My Dictionary! </h1>
			<h2 className='title'>Please select one of the following options</h2>
			{auth.isAuthenticated &&
				<>
					<div className='link'>
						<br/>
						<Link to='/listofwords'>Click here to view your words</Link>
					</div>
					<div className='link'>
						<br/>
						<Link to='/addword'>Click here to add a new word</Link>
					</div>
					<div className='link'>
						<br/>
					<Link to='/' onClick={() => logout()}>Logout</Link>
					</div>
				</>
			}
			{!auth.isAuthenticated &&
				<>
					<div className='link'>
						<br />
						<Link to='/signup'>Click here to sign up</Link>
					</div>
					<div className='link'>
						<br />
						<Link to='/login'>Click here to login</Link>
					</div>
				</>

			}
		</>
	)
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		logout: () => {
			const confirmSuccess = () => ownProps.history.push('/')
			dispatch(logoutUser(confirmSuccess))
		},
		fetchHouses: () => dispatch(fetchProperties())
	}
}


function mapStateToProps(globalState) {
	return {
		words: globalState.words,
		auth: globalState.auth
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
