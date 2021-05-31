import { combineReducers } from 'redux'

import words from './words'
import users from './users'
import auth from './auth'
// import languages from './languages'

export default combineReducers({
  words,
  users,
  auth,
//   languages
})
