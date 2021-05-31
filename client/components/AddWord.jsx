import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { addTheWords } from '../actions/index'

function AddWord(props, auth) {

	const [formData, setFormData] = useState({
		word: '',
		meaning: '',
		language: '',
		userId: props.auth.user.id
	})



	// console.log(props.auth.user.id)

	const handleAddSubmit = (e) => {
		e.preventDefault()
		props.dispatch(addTheWords({ word: formData.word, meaning: formData.meaning, language: formData.language, user_id: formData.userId }))
		console.log('submitted data')
		routeChange()
	}

	const handleChange = (e) => {
		//this function below keeps the event around so that the handlechange func can use it
		//I ended up not needing to use it since my packages were out of date and after an npm i it worked again
		// e.persist()
		setFormData(currentFormData => {
			// console.log(e)
			return {
				...currentFormData,
				[e.target.name]: e.target.value
			}
		})
	}

	const history = useHistory()

	const routeChange = () => {
		let path = `/listofwords`
		history.push(path)
	}

	let languages = {
		korean: 'Korean',
		english: 'English'
	}

	return (
		<>
			{!auth.isAuthenticated &&
				<div className='add-word'>
					<form onSubmit={handleAddSubmit}>
						<label  >
							<input className='new-word' type='text' name='word' placeholder='New word' onChange={(e) => handleChange(e)} />
							<input className='new-word' type='text' name='meaning' placeholder='New meaning' onChange={(e) => handleChange(e)} />
							
						</label>
						<button type='submit'>Add the new word</button>
					</form>
				</div>
			}
			<Link to='/'>Back</Link>
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		words: globalState.words,
		auth: globalState.auth
	}
}

export default connect(mapStateToProps)(AddWord)