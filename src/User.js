import React, { useState } from 'react'
import { Card, Image } from 'react-bootstrap'

import './User.css'

const User = data => {
  const { image, handle, followerCount, tweetCount } = data
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
