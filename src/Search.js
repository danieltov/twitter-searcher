import React, { useState } from 'react'
import { getTweets, getUser } from './api'

import { Form, InputGroup, Button } from 'react-bootstrap'

import './Search.css'

const Search = () => {
  const initState = {
    user: ''
  }

  const [formData, setFormData] = useState(initState)
  const { user } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    getTweets(user)
    getUser(user)
    setFormData(initState)
  }

  return (
    <aside className='Search'>
      <Form onSubmit={e => onSubmit(e)} autoComplete='off'>
        <InputGroup size='lg' className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            size='lg'
            name='user'
            type='text'
            placeholder='realDonaldTrump'
            onChange={e => onChange(e)}
            value={user}
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
