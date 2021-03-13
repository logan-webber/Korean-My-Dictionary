import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchWords, deleteTheWords, updateTheWords } from '../actions/index'

function ListOfWords (props) {

    const [formData, setFormData] = useState({
        word: '',
        meaning: ''
    })

    useEffect(() => {
        props.dispatch(fetchWords())
    }, [])

    const deleteOneWord = (id) => {
        return props.dispatch(deleteTheWords(id))
    }

    // const updateOneWord = (id) => {
    //     return props.dispatch(updateTheWords(id))
    // }

     const handleUpdateSubmit = (id, e) => {
        e.preventDefault()
        console.log(e)
        props.dispatch(updateTheWords(id, {word: formData.word, meaning: formData.meaning}))
        console.log('updated data')
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

    return(
        <>
            <ul className='list'>
                {props.words.map(wrd => 
                <li key={wrd.id}>
                    {wrd.word}
                    <br/>
                    {wrd.meaning}
                    <button type='button' onClick={() => deleteOneWord(wrd.id)}>
                        Delete
                    </button>
                    <form onSubmit={(e) => handleUpdateSubmit(wrd.id, e)}>
                      <label>
                        <input className='new-word' type='text' name='word' placeholder='edit word' onChange={(e) => handleChange(e)}/>
                        <input className='new-word' type='text' name='meaning' placeholder='edit meaning' onChange={(e) => handleChange(e)}/>
                      </label>
                      <button type='submit'>Update word</button>
                    </form>
                </li>)}
            </ul>
        </>
    )
}

function mapStateToProps(globalState){
    return{
        words: globalState.words
    }
}

export default connect(mapStateToProps)(ListOfWords)


