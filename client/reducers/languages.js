import { SET_LANGUAGES } from '../actions/languages'

const intialState = []

const reducer = (state = intialState, action) => {
    switch (action.type){
        case SET_LANGUAGES:
            return action.SET_LANGUAGES
        default:
            return state
    }
}

export default reducer