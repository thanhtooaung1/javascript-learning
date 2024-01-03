const fruits = ["apple", "orange", "banana"];

//pop()
let removedValue = fruits.pop();
// console.log(fruits.toString());
// console.log(removedValue);

//push()
let result = fruits.push("pineapple");
// console.log(fruits);
// console.log(result);

//shift()
fruits.shift();
// console.log(fruits);

//unshift()
fruits.unshift("apple");
// console.log(fruits);

//splice()
fruits.splice(2, 0, "banana");
// console.log(fruits);

//contcat()
const newFruits = ["lemon", "watermaleon"];
let resultFruits = fruits.concat(newFruits);
// console.log(resultFruits);

//join()
let resultString = resultFruits.join(" * ");
// console.log(resultString);

//find()
result = resultFruits.find(findFruit);
console.log(result);


function findFruit(value, index, array) {
    return value.startsWith('water');
}