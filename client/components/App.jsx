import React from 'react'
import AddWord from './AddWord'
import ListOfWords from './ListOfWords'

function App () {
  return(
    <>
      <h1>Here are the words</h1>
      <ListOfWords/>
      <AddWord/>
    </>
  )
}

export default App