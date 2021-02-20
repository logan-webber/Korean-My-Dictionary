import { getWords, addWords } from '../apis/words'

export const SET_WORDS = 'SET_WORDS'
export const ADD_WORDS = 'ADD_WORDS'

export function setWords(words) {
  return {
    type: SET_WORDS,
    words: words
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

export function fetchWords () {
  return dispatch => {
    return getWords()
    .then(words => {
      dispatch(setWords(words))
      return null
    })
  }
}