import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AddWord from './AddWord'
import ListOfWords from './ListOfWords'
import Home from './Home'
import SignUp from './SignUp'
import login from './login'

function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/listofwords' exact component={ListOfWords} />
        <Route path='/addword' exact component={AddWord} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/login' exact component={login} />
      </Router>
    </>
  )
}

export default App