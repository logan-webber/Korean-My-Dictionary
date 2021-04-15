import { getLanguages } from '../apis/languages'

export const SET_LANGUAGES = 'SET_LANGUAGES'

export function setLanguages(languages){
    return{
        type: SET_LANGUAGES,
        languages: languages
    }
}

export function fetchLanguages () {
    return dispatch => {
        return getLanguages()
        .then(languages => {
            dispatch(setLanguages(languages))
            return null
        })
    }
}