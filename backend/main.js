function isPrime(number) {
  // TODO 1: implement isPrime function
  // return true if number is prime
  // return false if number is not prime 
}

function getPrimeNumber(minNumber) {
  while (!isPrime(minNumber)) {
    minNumber += 1;
  }
  return minNumber;
}

function generatePrimeNumber() {
  const maxNumber = 1000000;
  const maxTime = 5000;
  const success = true;
  
  // TODO 2: implemnet a code snippet
  // success will be true with 50% probability
  // success will be false with 50% probability

  let randomTime = Math.floor(Math.random() * maxTime);
  let randomNumber = Math.floor(Math.random() * maxNumber);

  const randomPrimeNumber = getPrimeNumber(randomNumber);

  // TODO 3: promise implementation
  // shall return a promise,
  // which will be resolved with a {randomPrimeNumber},
  // after {randomTime}
  // if {success} is true, otherwise promise will be rejected
}

// TODO 4: generate only one prime number with THEN/CATCH syntax
// TODO 5: generate 2 prime number with THEN/CATCH syntax
// TODO 6: generate at least 1 prime number with THEN/CATCH syntax

// TODO 7: generate only one prime number with ASYNC/AWAIT syntax
// TODO 8: generate 2 prime number with ASYNC/AWAIT syntax
// TODO 9: generate at least 1 prime number with ASYNC/AWAIT syntax