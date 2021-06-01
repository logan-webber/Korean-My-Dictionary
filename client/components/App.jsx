import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import AddWord from './AddWord'
import ListOfWords from './ListOfWords'
import Home from './Home'
import SignUp from './SignUp'
import login from './login'
import Navbar from './Navbar'

function App({ auth }) {
	return (
		<>
			<Router>
				<Navbar />
				{!auth.isAuthenticated &&
					<>
						<Route path='/' exact component={Home} />
						<Route path='/signup' exact component={SignUp} />
						<Route path='/login' exact component={login} />
					</>
				}
				{auth.isAuthenticated &&
					<>
						<Route path='/listofwords' exact component={ListOfWords} />
						<Route path='/addword' exact component={AddWord} />
					</>
				}
			</Router>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	return {
		auth
	}
}


export default connect(mapStateToProps)(App)