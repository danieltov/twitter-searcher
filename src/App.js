import React, { useEffect } from 'react'
import { getTweets, getUser } from './utils/api'

import Container from 'react-bootstrap/Container'
import Search from './Search'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  useEffect(() => {
    getTweets('realDonaldTrump')
    getUser('realDonaldTrump')
  }, [])

  return (
    <Container className='App'>
      <h1 className='text-center'>Twitter Searcher</h1>
      <Search />
    </Container>
  )
}

export default App
