import React, { useState } from 'react'
import useGlobal from './store'

import { Card, Image } from 'react-bootstrap'

import './Tweets.css'

const mapTweets = tweets => {
  return tweets.map(tweet => (
    <Card
      key={tweet.id}
      className='my-3 text-decoration-none text-white bg-info'
      as='a'
      href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`}
      target='_blank'
      rel='noopener noreferrer'>
      <Card.Body>
        <Card.Text>{tweet.text}</Card.Text>
      </Card.Body>
    </Card>
  ))
}

const Tweets = () => {
  const [globalState] = useGlobal()
  const { tweets } = globalState
  return mapTweets(tweets)
}

export default Tweets
