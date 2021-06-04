import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchWords, deleteTheWords, updateTheWords } from '../actions/index'
import { fetchUsers } from '../actions/users'

function ListOfWords(props, auth) {

	const [formData, setFormData] = useState({
		word: '',
		meaning: ''
	})

	useEffect(() => {
		// These functions are what pull the data to this page so I can use it. If these are not here I cannot use the data
		// from the db
		props.dispatch(fetchWords())
		props.dispatch(fetchUsers())
	}, [])

	const deleteOneWord = (id, userId) => {
		if (userId == props.auth.user.id)
			return props.dispatch(deleteTheWords(id))
	}

	const handleUpdateSubmit = (id, e) => {
		e.preventDefault()
		props.dispatch(updateTheWords(id, { word: formData.word, meaning: formData.meaning }))
	}

	const handleChange = (e) => {
		setFormData(currentFormData => {
			console.log(e)
			return {
				...currentFormData,
				[e.target.name]: e.target.value
			}
		})
	}

	// This function ensure that users only see their own data and not every entry into the words table
	// it currently doesnt do anything to limit the update or delete buttons for other users words.
	const findWordsForEachUser = (userId, data) => {
		if (userId == props.auth.user.id) {
			return [
				data.word,
				data.meaning,
				data.language
			]
		}
	}

	const checkUserForDelete = (userId, wordData) => {
		if (userId == props.auth.user.id)
			return <button className='button' type='button' onClick={() => deleteOneWord(wordData.id, wordData.user_id)}>
				Delete
				   </button>
	}

	const checkUserForUpdate = (userId) => {
		if (userId == props.auth.user.id)
			return <label>
				<input className='new-word' type='text' name='word' placeholder='edit word' onChange={(e) => handleChange(e)} />
				<input className='new-word' type='text' name='meaning' placeholder='edit meaning' onChange={(e) => handleChange(e)} />
			</label>
	}

	const updateButtonStorage = (userId) => {
		if (userId == props.auth.user.id)
			return <button className='button' type='submit'>Update word</button>
	}

	return (
		<>
			{!auth.isAuthenticated &&
				<>
					<ul className='list'>
						{props.words.map(wrd =>
							<li key={wrd.id}>
								{findWordsForEachUser(wrd.user_id, wrd)}
								<form onSubmit={(e) => handleUpdateSubmit(wrd.id, e)}>
									{checkUserForUpdate(wrd.user_id)}
									{updateButtonStorage(wrd.user_id)}
									{checkUserForDelete(wrd.user_id, wrd)}
								</form>
							</li>)
						}
					</ul>
				</>
			}
			{/* For some reason auth.isAuthenticated is working backwards to normal
			and as a result this code looks kinda funny. Functionally its working 
			perfect but very strange. */}
			{auth.isAuthenticated &&
				<>
					<h2>You are not logged in</h2>
					<Link to='/login'>Click here to Login</Link>
				</>
			}
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		words: globalState.words,
		languages: globalState.languages,
		users: globalState.users,
		auth: globalState.auth
	}
}

export default connect(mapStateToProps)(ListOfWords)