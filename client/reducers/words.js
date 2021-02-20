import { SET_WORDS, ADD_WORDS } from '../actions'

const intialState = []

const reducer = (state = intialState, action) => {
    switch (action.type){
        case SET_WORDS:
            console.log(action.words)
            return action.words
        case ADD_WORDS:
            return [...state, {id: action.id, word: action.word, meaning: action.meaning}]
        default:
            return state
    }
}

export default reducer