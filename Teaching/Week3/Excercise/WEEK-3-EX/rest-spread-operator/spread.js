// Ex1: Use spread operator to copy an array and object of a given array and object
// / and console log it
const arrays = [1, 2, 3];

// let normalCopy = arrays ;
// let restCopy =[...arrays];

// arrays.push(4);
// console.log(normalCopy);
// console.log(restCopy);


// const object = { name: "John", age: 30 };

// let normalCopy = object;
// let restCopy = {...object};

// object.name ="Hana";
// console.log(normalCopy.name);
// console.log(restCopy.name);



// Ex2: Use spread operator to merge two arrays and objects
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combineWithSpread = [...array1,...array2];
// console.log(combineWithSpread);

// const combineWithoutSpread = [array1,array2];
// console.log(combineWithoutSpread);

// const object1 = { name: "John" };
// const object2 = { age: 30 };

// const combineWithSpread= {...object1,...object2};
// console.log (combineWithSpread);

// const combineWithoutSpread = { object1,object2};
// console.log(combineWithoutSpread);

// Ex3: Use spread operator to add an element to the start of the array
// add an element to the end of an array
// add an element to the start and an element to the end of an array
const baseArray = [1, 2, 3];

const spreadAtTheEnd = [0,...baseArray];
console.log(spreadAtTheEnd);

const spreadAtStart = [...baseArray,4];
console.log(spreadAtStart);





// Ex4: Use spread operator to add a key to the start of an object
// add a key to the end of an object
// add a key to the start and a key to the end of an object
const baseObject = { name: "John" };

const spreadAtTheStart = {...baseObject,age : 12};
console.log(spreadAtTheStart);

const spreadEndAndStart = {country :"USA",...baseObject,age : 12};
console.log (spreadEndAndStart);




// Ex5: Use spread operator to merge two arrays
// and add an element to the start and also one at the end
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const mergeTwoArrays = [ 0,...arrayA,...arrayB,7];
console.log(mergeTwoArrays);




// // Ex6: Use spread operator to merge two objects
// // and add a key to the start and also one at the end
const student = { name :"Kanha",age : 18};
const mergeTwoObject = { city :"Kompot",...student,major : "sc"};
console.log (mergeTwoObject);