import React, { useState } from 'react'
import useGlobal from './store'

import { Form, InputGroup, Button } from 'react-bootstrap'

import './Search.css'

const Search = () => {
  const [globalState, globalActions] = useGlobal()

  const onSubmit = e => {
    e.preventDefault()
    const user = e.target.user.value
    globalActions.getData(user)
    console.log(globalState)
  }

  return (
    <aside className='Search'>
      <Form onSubmit={onSubmit} autoComplete='off'>
        <InputGroup size='lg' className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            size='lg'
            name='user'
            type='text'
            placeholder='realDonaldTrump'
            autoComplete='off'
          />
          <InputGroup.Append>
            <Button variant='outline-secondary' type='submit'>
              Go
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </aside>
  )
}

export default Search
