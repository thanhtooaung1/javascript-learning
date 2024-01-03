let text = "HELLO WORLD";


//indexof(), lastIndexOf(), charAt()
let index = text.indexOf('W');
let lastIndex = text.lastIndexOf('O');
let result = text.charAt(2);

// console.log(result);

//substring(), toUpperCase(), toLowerCase()
result = text.substring(0, 5);
result = text.toUpperCase();
result = text.toLowerCase();
// console.log(result);

//trim(), split()
text = "   Hello     ";
result = text.trim();
text = "Hello World";
result = text.split(" ");
// console.log(result);

//startsWith(), endsWith(), includes()
result = text.startsWith('Hello');
result = text.endsWith('World');
result = text.includes('orl');
// console.log(result);

//template
let firstName = "Than";
let lastName = "Htoo";
let fullName = `Fullname is ${firstName} ${lastName}`;
console.log(fullName);