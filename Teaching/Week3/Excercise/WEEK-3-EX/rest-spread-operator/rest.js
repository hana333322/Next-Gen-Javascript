// Ex1: Make a function using rest operator to get all the arguments passed in 
// and console log it
const rest = (...array) => {
    console.log(array);
}
rest(1,2,3,4);



// Ex2: Make a function to get the first and second arguments 
// and use rest operator to get the rest 
// and console log first, second, and the rest
const getFirstAndSecond = (first ,second ,...rest) => {
    console.log (`first : ${first}`);
    console .log (`second : ${second}`);
    console .log (`rest : ${rest}`);
}
getFirstAndSecond(1,2,3,4,5);


// Ex3: Use rest operator to get the first 3 elements and the rest
// and console log it
const array=[1,2,3,4,5]
let [first,second,third,...rest] = array;
console.log(first);
console.log(second);
console.log(rest);



// Ex3: Use rest operator to get the name, age, married, music, and the rest
// and console log it
const objects = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    occupation: "Engineer",
    hobby: "Photography",
    favoriteColor: "Blue",
    pet: "Dog",
    married: false,
    language: "English",
    sport: "Football",
    music: "Kpop"
};
let {name,age ,married,music,...rest}= objects;
console.log(name);
console.log(age);
console.log(married);
console.log(rest);