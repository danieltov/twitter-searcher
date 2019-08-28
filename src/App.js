import React, { useEffect } from 'react';
import { getTweets, getUser } from './api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    getTweets('realDonaldTrump');
    getUser('realDonaldTrump');
  });

  return <div className='App'></div>;
}

export default App;
