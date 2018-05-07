import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Header from './Header';
import Container1 from './Container1';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
           <Container1 />

           <hr />

<Footer />


      </div>
    );
  }
}

export default App;
