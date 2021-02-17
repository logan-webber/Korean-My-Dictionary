import { getWords } from '../apis/words'

export const SET_WORDS = 'SET_WORDS'

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