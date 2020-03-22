// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';



console.time("concatenation")

function isPrime(num) {
  if (num < 2){
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) {
      return false
    }
  }
  return true 
}

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
console.timeEnd("concatenation")

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
