// importing react module
import React from 'react';
// importing stylesheet for the app
import './App.css';
// importing gallery component
import Gallery from './Gallery';
// importing banner component
import Banner from './banner';

// defining the main app component
function App() {
  // returning the main jsx structure of the app
  return (
    <div className="App">
      <Banner />
      <h1 className="MainTitle">Delicious Delights</h1>
      <header className="App-header">
      <Gallery />
      </header>
    </div>
  );
}

// exporting the app component for use in index.js
export default App;
