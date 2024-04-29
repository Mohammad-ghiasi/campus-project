function calculate1() {
    const n1 = parseInt(document.getElementById('n1').value);
    const m1 = parseInt(document.getElementById('m1').value);

    const factorialN = factorial(n1);
    const factorialM = factorial(m1);

    const sum = factorialN + factorialM;

    document.getElementById('result1').innerText = `${sum}`;
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function calculate2() {
    const n = parseInt(document.getElementById('n2').value);
    const m = parseInt(document.getElementById('m2').value);

    const result = Math.pow(n, m);

    document.getElementById('result2').innerText = `${n} raised to the power of ${m} is ${result}`;
}


function checkPrime() {
    const n = parseInt(document.getElementById('n3').value);
    let isPrime = true;

    if (n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        document.getElementById('result3').innerText = `${n} is a prime number.`;
    } else {
        document.getElementById('result3').innerText = `${n} is not a prime number.`;
    }
}


function findPrimes() {
    const n = parseInt(document.getElementById('n4').value);
    const primes = [];

    // Loop through numbers from 2 to n
    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        // Check if i is divisible by any number less than i
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        // If i is prime, add it to the primes array
        if (isPrime) {
            primes.push(i);
        }
    }

    // Display the prime numbers
    document.getElementById('result4').innerText = "Prime numbers up to " + n + ": " + primes.join(', ');
}


function findFibonacci() {
    const n = parseInt(document.getElementById('n5').value);
    const fibonacci = [1, 1];

    // Generate Fibonacci sequence up to n
    for (let i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    // Display the Fibonacci sequence
    document.getElementById('result5').innerText = "Fibonacci sequence up to " + n + ": " + fibonacci.join(', ');
}