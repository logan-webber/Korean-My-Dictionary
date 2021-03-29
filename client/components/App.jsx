import React from 'react'
import AddWord from './AddWord'
import ListOfWords from './ListOfWords'
import Home from './Home'
import { Route, Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/listofwords' exact component={ListOfWords} />
        <Route path='/addword' exact component={AddWord} />
      </Router>
    </>
  )
}

export default App