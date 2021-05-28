import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchWords, deleteTheWords, updateTheWords } from '../actions/index'
import { fetchLanguages } from '../actions/languages'
import { fetchUsers } from '../actions/users'
// import { receiveLogin } from '../actions/auth'

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

	// This solution is a bit hard coded but it works for me since I am not planning on having 10000 languages rather like 20
	// mabye so I will put this in its own file if I'm feeling lazy or I could create a better solution in the future.
	const findLangauge = (id) => {
		if (id === 1) {
			return 'English'
		} else if (id === 2) {
			return 'Korean'
		}
	}

	// This function ensure that users only see their own data and not every entry into the words table
	// it currently doesnt do anything to limit the update or delete buttons for other users words.
	const findWordsForEachUser = (userId, data) => {
		if (userId == props.auth.user.id) {
			return [
				data.word, <br />,
				data.meaning, <br />,
				findLangauge(data.language_id), <br />
			]
		}
	}

	// const renderFormWithCorrectId = (id) => {
	// 	if (id == props.auth.user.id) {
	// 		return <label>
	// 						<input className='new-word' type='text' name='word' placeholder='edit word' onChange={(e) => handleChange(e)} />
	// 						<input className='new-word' type='text' name='meaning' placeholder='edit meaning' onChange={(e) => handleChange(e)} />
	// 					 </label>		     
	// 	}
	// }

	return (
		<>

			{!auth.isAuthenticated &&
				<>
					<ul className='list'>
						{props.words.map(wrd =>
							<li key={wrd.id}>
								{findWordsForEachUser(wrd.user_id, wrd)}
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



