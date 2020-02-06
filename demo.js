//Prime number checker
let nonPrimes = [];
let primes = [];
let num = 213;
​
const checkIfPrime = (num) =>{
    let sqrtNum = Math.floor(Math.sqrt(num));
    for (let i = 2; i < sqrtNum + 1; i++){
        if (num % i == 0){
        nonPrimes.push(num);
        return false;
        }
    }
} 
​
for (let i = 2; i < (Math.floor(Math.sqrt(num)) + 1); i++){
        if (checkIfPrime(i) != false){
            primes.push(i);
    }
}
​
console.log(`The prime numbers are ${primes}`);
console.log(`The non-prime numbers are ${nonPrimes}`);
​
for (let i = 0; i <= primes.length; i++){
    let val = (primes[i]);
    if (num % val == 0){
        console.log(`${num} is not a prime`);
        return false;
    }
}

//Reminder:
//xcode-select --install
//if git init doesn't work!

//to change username that shows up on github:
// git config --global user.name "John Doe"
// git config --global user.email "johndoe@example.com"