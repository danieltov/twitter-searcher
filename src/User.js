import React, { useState } from 'react'
import useGlobal from './store'

import { Card, Image } from 'react-bootstrap'

import './User.css'

const User = () => {
  const [globalState] = useGlobal()
  const { image, handle, followerCount, tweetCount } = globalState.user

  return (
    <aside className='User'>
      <Card>
        <Card.Body>
          <Image src={image} rounded></Image>
          <Card.Title>{handle}</Card.Title>
          <p className='bold'>Followers: {followerCount}</p>
          <p className='bold'>Tweets: {tweetCount}</p>
        </Card.Body>
      </Card>
    </aside>
  )
}

export default User
