import React, { useState } from 'react'
import useGlobal from './store'

import { Card, Image } from 'react-bootstrap'

import './User.css'

const User = () => {
  const [globalState] = useGlobal()
  const {
    profile_image_url_https: image,
    screen_name: handle,
    followers_count: followerCount,
    statuses_count: tweetCount
  } = globalState.user

  return (
    <aside className='User'>
      <Card>
        <Card.Body>
          <Image src={image} thumbnail></Image>
          <Card.Title className='mt-3 font-weight-bold'>
            <a
              href={`https://twitter.com/${handle}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-info'>
              @{handle}
            </a>
          </Card.Title>
          <Card.Text>
            Followers:{' '}
            {followerCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            <br />
            Tweets:{' '}
            {tweetCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Card.Text>
        </Card.Body>
      </Card>
    </aside>
  )
}

export default User
