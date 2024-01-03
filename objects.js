const person = {
    firstName: "Aung",
    lastName: "Kaung",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());
console.log(person.age);

person.age = 31;

console.log(person.age);