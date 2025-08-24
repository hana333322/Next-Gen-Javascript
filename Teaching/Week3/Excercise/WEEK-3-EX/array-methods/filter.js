// Ex1: Use filter to create a new array with only the even numbers
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(numbers => numbers%2==0);
console.log(even);


// // Ex2: Use filter to create a new array with only the people who are 30 or older
const people = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 35 },
];
const older = people.filter(people => people>=30);
console.log(older);

// Ex3: Use filter to create a new array with products that have a price greater than 200 after tax
const products = [
	{ name: "Laptop", price: 1000, tax: 0.1 },
	{ name: "Phone", price: 500, tax: 0.2 },
	{ name: "Tablet", price: 300, tax: 0.15 },
	{ name: "Monitor", price: 200, tax: 0.18 },
	{ name: "Keyboard", price: 50, tax: 0.12 },
];
const price = products = products.filter(products => products*tax);
console.log(price);

// Ex4: Use filter to create a new array with books that have won an award
const books = [
	{ title: "Charlotte's Web", awards: 1 },
	{ title: "The Hobbit", awards: 0 },
	{ title: "Harry Potter and the Sorcerer's Stone", awards: 3 },
	{ title: "Green Eggs and Ham", awards: 0 },
	{ title: "The Cat in the Hat", awards: 2 },
	{ title: "Matilda", awards: 1 },
];


// Ex5: Use filter to create a new array to return sports teams with less than 6 players
const sportsTeams = [
	{ name: "Basketball Team", players: 5 },
	{ name: "Volleyball Team", players: 6 },
	{ name: "Futsal Team", players: 5 },
	{ name: "Table Tennis Doubles", players: 2 },
	{ name: "Relay Team", players: 4 },
	{ name: "Football Team", players: 11 }
];
