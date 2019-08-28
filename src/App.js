import React from 'react'
import Container from 'react-bootstrap/Container'
import Search from './Search'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container className='App'>
      <h1 className='text-center'>Twitter Searcher</h1>
      <Search />
    </Container>
  )
}

export default App
