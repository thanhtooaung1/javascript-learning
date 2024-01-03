const numbers = [45, 4, 9, 16, 25];

// numbers.forEach((value) => console.log(value));
// let result = numbers.map((value) => value * 2);
// let result = numbers.filter((value) => value > 18);
// let result = numbers.reduce((total, value) => total + value);
// let result =  numbers.every((value) => value > 18);
let result =  numbers.some((value) => value > 18);


console.log(result);