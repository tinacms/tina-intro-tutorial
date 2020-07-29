import React from 'react';
import logo from './Icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <PageContent />
    </div>
  );
}

export default App;

const data = {
  title: 'Tina is not a CMS',
  body: 'It is a toolkit for creating a custom CMS.',
};

function PageContent() {
  return (
    <section className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <EditButton />
    </section>
  );
}

function EditButton() {
  return (
    <button onClick={() => window.alert("Tina isn't configured yet!")}>
      Edit This Site
    </button>
  );
}
