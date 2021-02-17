import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchWords } from '../actions/index'

function ListOfWords (props) {

    useEffect(() => {
        props.dispatch(fetchWords())
    }, [])

    return(
        <>
            <ul>
                {props.words.map(wrd => 
                <li key={wrd.id}>
                    {wrd.word}
                    <br/>
                    {wrd.meaning}
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



