// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

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

//arrays problem
function removeDuplicates (nums) {
  let numBeforeI = 0 
  for (let i = 1; i < nums.length; i++){
    if (nums[i] !== nums[i++]){
        nums[numBeforeI] = nums[i]
        numBeforeI++;
      }
   }
   console.log("nums:", nums)
};

let nums = [1, 2, 2]
removeDuplicates(nums)

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
