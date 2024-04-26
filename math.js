//1. function that calculate fuctorial of a given no.
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the function
let number = 5;
console.log("Factorial of", number, "is", factorial(number));


// 2.functions that checks if a number is a prime
function isPrime(n) {
    switch (true) {
        case n <= 1:
            return false;
        case n <= 3:
            return true;
        case n % 2 === 0 || n % 3 === 0:
            return false;
        default:
            for (let i = 5; i * i <= n; i += 6) {
                if (n % i === 0 || n % (i + 2) === 0) {
                    return false;
                }
            }
            return true;
    }
}

// Test the function
let nomber = 17;
if (isPrime(number)) {
    console.log(number + " is a prime number");
} else {
    console.log(number + " is not a prime number");
}

// 3.fibonicci sequence
function generateFibonacci(numTerms) {
    let fibonacciSeq = [];
    if (numTerms === 1) {
        fibonacciSeq.push(0);
    } else if (numTerms === 2) {
        fibonacciSeq.push(0, 1);
    } else {
        fibonacciSeq.push(0, 1);
        for (let i = 2; i < numTerms; i++) {
            let nextFibonacci = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
            fibonacciSeq.push(nextFibonacci);
        }
    }
    return fibonacciSeq;
}

// Test the function
let numTerms = 10;
let fibonacciSequence = generateFibonacci(numTerms);
console.log("Fibonacci sequence up to", numTerms, "terms:", fibonacciSequence.join(", "));
