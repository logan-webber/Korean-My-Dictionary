import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { addTheWords } from '../actions/index'

function AddWord(props, auth) {

	const [formData, setFormData] = useState({
		word: '',
		meaning: '',
		userId: props.auth.user.id,
		language: ''
	})

	const handleAddSubmit = (e) => {
		e.preventDefault()
		props.dispatch(addTheWords({ word: formData.word, meaning: formData.meaning, user_id: formData.userId, language: formData.language }))
		console.log('submitted data')
		routeChange()
	}

	const handleChange = (e) => {
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

	return (
		<>
			{!auth.isAuthenticated &&
				<div className='add-word'>
					<form onSubmit={handleAddSubmit}>
						<label>
						<input className='new-word' type='text' name='word' placeholder='New word' onChange={(e) => handleChange(e)} />
						<input className='new-word' type='text' name='meaning' placeholder='New meaning' onChange={(e) => handleChange(e)} />
							<select name='language' onChange={(e) => handleChange(e)}>
								<option value='Not Specified'>Please select a language</option>
								<option value='English'>English</option>
								<option value='Korean'>Korean</option>
							</select>
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