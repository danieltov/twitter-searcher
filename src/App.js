import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url =
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realdonaldtrump';
    fetch(proxyurl + url, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer AAAAAAAAAAAAAAAAAAAAACcR%2FwAAAAAAa%2BLTPME0kHq1aHBrSmYo8AJmdEw%3DUObh6gRSOoRzqEA1WCys2DzfgZO4NwHnSt78lIS2sf3AxwAmIo'
      }
    })
      .then(res => res.json())
      .then(result => console.log(result), error => console.error(error));
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
