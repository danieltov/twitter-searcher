import React, { useEffect } from 'react'
import useGlobal from './store'

import Container from 'react-bootstrap/Container'
import Search from './Search'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [globalState, globalActions] = useGlobal()

  useEffect(() => {
    globalActions.getData('realDonaldTrump')
  }, [])

  return (
    <Container className='App'>
      <h1 className='text-center'>Twitter Searcher</h1>
      <Search />
    </Container>
  )
}

export default App
