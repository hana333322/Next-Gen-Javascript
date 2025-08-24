// Ex1: Use map to create a new array that contains the square of each number in the original array
const numbers = [1, 2, 3, 4, 5];
const squareNum = numbers.map(num =>num*num);
console.log(squareNum);

// Ex2: Use map and spread operator to create a new array of object with a new hobby key of "Coding"
const people = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 35 },
];
const peopleWithHobby = people.map(person => ({ ...person, hobby: "Coding" }));
console.log(peopleWithHobby);

// Ex3: Use map to create a new array to return a full name of an array of objects
const peopleWithNames = [
	{ firstName: "John", lastName: "Doe" },
	{ firstName: "Jane", lastName: "Smith" },
	{ firstName: "Michael", lastName: "Johnson" },
	{ firstName: "Emily", lastName: "Davis" },
	{ firstName: "David", lastName: "Brown" },
];
const fullNames = peopleWithNames.map(person => person.firstName  +" "+ person.lastName);
console.log(fullNames);