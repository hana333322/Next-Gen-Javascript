// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const object1 = { name: "John" };
// const object2 = { age: 30 };



// // Ex3: Use spread operator to add an element to the start of the array
// // add an element to the end of an array
// // add an element to the start and an element to the end of an array
// const baseArray = [1, 2, 3];

// const startOfArray = [0,...baseArray];
// console.log(startOfArray);

// const endOfArray = [...baseArray,4];
// console.log(endOfArray);

// const startAndEnd = [0,...baseArray,4];
// console.log(startAndEnd);




// // Ex4: Use spread operator to add a key to the start of an object
// // add a key to the end of an object
// // add a key to the start and a key to the end of an object
// const baseObject = { name: "John" };

// const startObject = {major :"SC",...baseObject};
// console.log(startObject);

// const endObject = {...baseObject,age : 19};
// console.log(endObject);

// const endAndstart = { major :"SC",...baseObject,age:19};
// console.log (endAndstart);




// // Ex5: Use spread operator to merge two arrays
// // and add an element to the start and also one at the end
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const mergeTwoArray = [0,...arrayA,...arrayB,7];
console.log(mergeTwoArray);



// // Ex6: Use spread operator to merge two objects
// // and add a key to the start and also one at the end

const object1 = {name :"kanha"};
const object2 = {name : "Thida"};

const mergeTwoObject = { id : 122, ...object1,...object2,id : 333};
console.log(mergetwoObject);