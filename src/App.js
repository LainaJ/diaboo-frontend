import React from 'react';
import './App.css';

class App extends React.Component {


  componentDidMount(){
    fetch('https://sandbox-api.dexcom.com')
    .then(resp => resp.json())
    .then(dexcomData => console.log(dexcomData))
  }

  render() {
    return (
      <div>

      </div>
    )
    }

  }

export default App;
