// Operators

let x;
let y = 3;
let result;

//Assignment
x = 3;
x += 1;
x -= 1;
x /= 2;
x *= 5;
x = ++x;
x = --x;

console.log(x);

//Arithmetic operators
result = x + y;
result = x - y;
result = x * y;
result = x / y;
result = x % y;

//Comparson operators
result = x == y;
result = x < y;
result = x > y;
result = x != y;
result = x <= y;
result = x >= y;

console.log(result);

//Logical operators
if(x > 2 && y < 6) {
    console.log("true");
}

if(x < 5 || y > 3) {
    console.log("true");
}

if(!(x < 5)) {
    console.log("false");
}

//Ternary operator
let z = x < 6 ? x : y;

console.log(z);

//Type operator
console.log(typeof x);