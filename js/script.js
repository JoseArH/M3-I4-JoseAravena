function power(base, exponent) {
    return Math.pow(base, exponent);
}

function factorial(n) {
    if (n < 0) return -1;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const user = {
    name: 'Juan',
    age: 25,
    setName: function(newName) {
        this.name = newName;
    },
    setAge: function(newAge) {
        this.age = newAge;
    }
};

const factorialArrow = (n) => {
    if (n < 0) return -1;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

function fibonacci(n) {
    if (n <= 1) return n;
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[\W_]/g, '');
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

function calculatePower() {
    const base = parseInt(document.getElementById('base').value, 10);
    const exponent = parseInt(document.getElementById('exponent').value, 10);
    const result = power(base, exponent);
    document.getElementById('powerResult').textContent = result;
}

function calculateFactorial() {
    const n = parseInt(document.getElementById('factorialInput').value, 10);
    const result = factorial(n);
    document.getElementById('factorialResult').textContent = result;
}

function updateUser() {
    const newName = document.getElementById('userNameInput').value;
    const newAge = parseInt(document.getElementById('userAgeInput').value, 10);
    user.setName(newName);
    user.setAge(newAge);
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userAge').textContent = user.age;
}

function calculateFactorialArrow() {
    const n = parseInt(document.getElementById('factorialArrowInput').value, 10);
    const result = factorialArrow(n);
    document.getElementById('factorialArrowResult').textContent = result;
}

function calculateFibonacci() {
    const n = parseInt(document.getElementById('fibonacciInput').value, 10);
    const result = fibonacci(n).join(', ');
    document.getElementById('fibonacciResult').textContent = result;
}

function checkPalindrome() {
    const word = document.getElementById('wordInput').value;
    const result = isPalindrome(word);
    document.getElementById('palindromeResult').textContent = result ? 'Sí' : 'No';
}

calculatePower();
calculateFactorial();
updateUser();
calculateFactorialArrow();
calculateFibonacci();
checkPalindrome();