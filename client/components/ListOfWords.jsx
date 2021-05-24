import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchWords, deleteTheWords, updateTheWords } from '../actions/index'
import { fetchLanguages } from '../actions/languages'

function ListOfWords(props) {

	const [formData, setFormData] = useState({
		word: '',
		meaning: ''
	})

	useEffect(() => {
		props.dispatch(fetchWords())
		// This function below doesnt appear to do anything atm I have a function below which
		// does what all of the lanuage redux stuff was trying to do but mich simplier which
		// is rad since I have been stuck on this problem for far too long. I will work on a fix
		//sometime in the future
		props.dispatch(fetchLanguages())
	}, [])

	const deleteOneWord = (id) => {
		return props.dispatch(deleteTheWords(id))
	}

	// const updateOneWord = (id) => {
	//     return props.dispatch(updateTheWords(id))
	// }

	const handleUpdateSubmit = (id, e) => {
		e.preventDefault()
		// console.log(e)
		props.dispatch(updateTheWords(id, { word: formData.word, meaning: formData.meaning }))
		// console.log('updated data')
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

	const findLangauge = (id) => {
		if(id === 1){
			return 'English'
		} else if (id === 2){
			return 'Korean'
		}
	}

	return (
		<>
			{auth.isAuthenticated &&
			<>
				<ul className='list'>
					{props.words.map(wrd =>
						<li key={wrd.id}>
							{wrd.word}
							<br/>
							{wrd.meaning}
							<br/>
							{console.log(props)}
							{findLangauge(wrd.language_id)}
							<br/>
							<button type='button' onClick={() => deleteOneWord(wrd.id)}>
								Delete
											</button>
							<form onSubmit={(e) => handleUpdateSubmit(wrd.id, e)}>
								<label>
									<input className='new-word' type='text' name='word' placeholder='edit word' onChange={(e) => handleChange(e)} />
									<input className='new-word' type='text' name='meaning' placeholder='edit meaning' onChange={(e) => handleChange(e)} />
								</label>
								<button type='submit'>Update word</button>
							</form>
						</li>)}
				</ul>
				<Link to='/'>Back</Link>
			</>
			}
			{!auth.isAuthenticated &&
			<>
				<h2>You are not logged in</h2>
				<Link to='/login'>Click here to Login</Link>
			</>
			}
			
		</>
	)
}

function mapStateToProps({words, languages, auth}) {
	return {
		words,
		languages,
		auth
	}
}

export default connect(mapStateToProps)(ListOfWords)



