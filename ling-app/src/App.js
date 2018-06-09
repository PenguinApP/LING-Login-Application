import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    var myStyle={

      fontSize:40,
      color:'#5555FF'

    }

    var WebStyle={

      color:'#9999FF'

    }

    return (

      <div className="App">

        <html>

        </head>

        <body style={WebStyle}>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style={myStyle}>Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        </body>

        </html>

      </div>

    );
  }
}

export default App;
