import { SET_WORDS } from '../actions'

const intialState = []

const reducer = (state = intialState, action) => {
    switch (action.type){
        case SET_WORDS:
            console.log(action.words)
            return action.words
        default:
            return state
    }
}

export default reducer