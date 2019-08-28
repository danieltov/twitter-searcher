import React, { useEffect } from 'react'
import useGlobal from './store'

import Container from 'react-bootstrap/Container'
import Search from './Search'
import User from './User'
import Tweets from './Tweets'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [globalState, globalActions] = useGlobal()

  const { status } = globalState

  useEffect(() => {
    globalActions.getData('tim_cook')
  }, [])

  return (
    <Container className='App'>
      <h1 className='text-center'>Twitter Searcher</h1>
      <Search />
      {status === 'ERROR' ? (
        'There was an error, try again.'
      ) : status === 'NOT_FOUND' ? (
        'The user was not found.'
      ) : status === 'SUCCESS' ? (
        <>
          <User />
          <Tweets />
        </>
      ) : (
        'Loading...'
      )}
    </Container>
  )
}

export default App
