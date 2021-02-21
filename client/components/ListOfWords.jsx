import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchWords, deleteTheWords } from '../actions/index'

function ListOfWords (props) {

    useEffect(() => {
        props.dispatch(fetchWords())
    }, [])

    const deleteOneWord = (id) => {
        return props.dispatch(deleteTheWords(id))
    }

    return(
        <>
            <ul>
                {props.words.map(wrd => 
                <li key={wrd.id}>
                    {wrd.word}
                    <br/>
                    {wrd.meaning}
                    <button type='button' onClick={() => deleteOneWord(wrd.id)}>
                        Delete
                    </button>
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



