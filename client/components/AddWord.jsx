import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { addTheWords, fetchWords, updateTheWords } from '../actions/index'

function AddWord(props) {

    const [formData, setFormData] = useState({
        word: '',
        meaning: ''
    })

    const handleAddSubmit = (e) => {
        e.preventDefault()
        props.dispatch(addTheWords({ word: formData.word, meaning: formData.meaning }))
        console.log('submitted data')
    }

    const handleChange = (e) => {
        //this function below keeps the event around so that the handlechange func can use it
        // e.persist()
        setFormData(currentFormData => {
            console.log(e)
            return {
                ...currentFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <form onSubmit={handleAddSubmit}>
                <label>
                    <input className='new-word' type='text' name='word' placeholder='New word' onChange={(e) => handleChange(e)} />
                    <input className='new-word' type='text' name='meaning' placeholder='New meaning' onChange={(e) => handleChange(e)} />
                </label>
                <button type='submit'>Add the new word</button>
            </form>
        </>
    )
}

function mapStateToProps(globalState) {
    return {
        words: globalState.words
    }
}

export default connect(mapStateToProps)(AddWord)