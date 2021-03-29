import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


function Home() {


	return (
		<>
			<h1 className='title'>Welcome to My Dictionary! </h1>
			<h2 className='title'>Please select one of the following options</h2>
			<Link to='/listofwords'>Click here to view your words</Link>
			<Link to='/addword'>Click here to add a new word</Link>
			
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		words: globalState.words
	}
}

export default connect(mapStateToProps)(Home)
