import { getWords, addWords, deleteWords, updateWords } from '../apis/words'

export const SET_WORDS = 'SET_WORDS'
export const ADD_WORDS = 'ADD_WORDS'
export const DELETE_WORDS = 'DELETE_WORDS'
export const UPDATE_WORDS = 'UPDATE_WORDS'

export function setWords(words) {
  return {
    type: SET_WORDS,
    words: words
  }
}

export function fetchWords () {
  return dispatch => {
    return getWords()
    .then(words => {
      dispatch(setWords(words))
      return null
    })
  }
}

export function addTheWords(words){
  return dispatch => {
    return addWords(words)
    .then(() => {
      dispatch(fetchWords())
      return null
    })
  }
}

export function deleteTheWords(id){
  return dispatch => {
    return deleteWords(id)
    .then(() => {
      dispatch(fetchWords())
      return null
    })
  }
}

export function updateTheWords(id, word) {
  return dispatch => {
    console.log(id, word)
    return updateWords(id, word)
    .then(() => {
      dispatch(fetchWords())
      return null
    })
  }
}


