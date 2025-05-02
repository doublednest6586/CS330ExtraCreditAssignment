import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="text-center my-5">
        <h1 className="display-4 fw-bold">CS 330L</h1>
        <h2 className="h3 mb-3">Section-011</h2>
        <p className="lead">WVU ID: 800429139</p>
        <p className="lead">Hi I am Oliver Diangelo.</p>
      </div>
    <Card />
    </div>
  );
}

export default App;
