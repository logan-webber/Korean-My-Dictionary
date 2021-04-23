import { SET_WORDS, ADD_WORDS, DELETE_WORDS, UPDATE_WORDS } from '../actions'

const intialState = []

const reducer = (state = intialState, action) => {
    switch (action.type){
        case SET_WORDS:
            // console.log(action.words)
            return action.words
        case ADD_WORDS:
            return [...state, {id: action.id, word: action.word, meaning: action.meaning}]
        case DELETE_WORDS:
            return state.filter(word => word.id !== action.id)
        case UPDATE_WORDS:
            return state.map(word => word.id === action.id)
        default:
            return state
    }
}

export default reducer