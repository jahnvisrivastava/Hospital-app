import React from 'react';
import Login from './components/Login';
import GoogleMapComponent from './components/GoogleMapComponent.js';

const App = () => {
  return (
    <div>
      <h1>Hospital Locator</h1>
      <Login />
      <GoogleMapComponent />
    </div>
  );
};

export default App;