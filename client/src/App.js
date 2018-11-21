import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: ''
  }
  componentDidMount = () => {
    // Make sure to change the (localhost) on the line bellow 
    // to the public DNS of your EC2 instance
    axios.get(`http://localhost:4000/sayHello`)
    .then(res => {
      const dataFromServer = res.data;
      this.setState({ data: dataFromServer });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Server is saying:</p>
          <p>
            {this.state.data}
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
