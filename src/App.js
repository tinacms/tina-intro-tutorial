import React from 'react';
import logo from './Icon.svg';
import './App.css';

function App() {
  const data = {
    title: 'Tina is not a CMS',
    body: 'It is a toolkit for creating a custom CMS.',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <a
          className="App-link"
          href="https://tinacms.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
