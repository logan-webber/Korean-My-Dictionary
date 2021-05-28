import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { addTheWords } from '../actions/index'
import { fetchUsers } from '../actions/users'

function AddWord(props, auth) {

    useEffect(() => {
        props.dispatch(fetchUsers())
    }, [])

    const [formData, setFormData] = useState({
        word: '',
        meaning: '',
        userId: userId
    })

    const userId = props.auth.user.id

    console.log(props.users.id)
    // console.log(props.auth.user.id)
    // console.log(props.auth)



    const handleAddSubmit = (e) => {
        e.preventDefault()
        props.dispatch(addTheWords({ word: formData.word, meaning: formData.meaning}, userId))
        console.log('submitted data')
        routeChange()
    }

		// const passUserIdToNewWord = (id) => {
		// 	return id
		// }

    const handleChange = (e) => {
        //this function below keeps the event around so that the handlechange func can use it
        //I ended up not needing to use it since my packages were out of date and after an npm i it worked again
        // e.persist()
        setFormData(currentFormData => {
            console.log(e)
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
        users: globalState.users,
        auth: globalState.auth
    }
}

export default connect(mapStateToProps)(AddWord)