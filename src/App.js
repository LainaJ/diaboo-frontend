// import React from 'react';
// import './App.css';

// class App extends React.Component {

  // https://sandbox-api.dexcom.com/v2/oauth2/login?client_id={your_client_id}&redirect_uri={your_redirect_uri}&response_type=code&scope=offline_access&state={your_state_value}
  // https://sandbox-api.dexcom.com
  // https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=8nX2snn5pfz6shrvTZ2QEEow0FS12Kpf&redirect_uri={your_redirect_uri}&response_type=code&scope=offline_access

  // componentDidMount(){
  // "Access-Control-Allow-Origin"
  //   fetch('https://sandbox-api.dexcom.com')
  //   .then(resp => resp.json())
  //   .then(dexcomData => console.log(dexcomData))
  // }

  console.time("concatenation")

  function isPrime(num) {
    //if number is 0 or 1, not prime
    if (num < 2){
      return false
    }
    //loop through, test dividing all numbers between 2-num(not including num); eliminate even nums
    for (let i = 2; i < num; i++){
      if (num % i === 0) {
        return false
      }
    }
    return true 
  }

// 10 => 2, 3, 5, 7
  function allPrime(num) {
    let primes = []
    for (let i = 2; i < num; i++){
      if (isPrime(i)) {
        primes.push(i)
      }
    }
    return primes 
  }

  console.log(allPrime(10))
  console.timeEnd("concatenation end")
 

  // render() {
  //   return (
  //     <div>
  //       Hey there!
  
  //     {console.log("allPrime", this.isPrime(10))}
  //     {console.log("allPrime2", this.allPrime(10))}

      
  //     </div>
  //   )
  //   }

  // }

// export default App;
