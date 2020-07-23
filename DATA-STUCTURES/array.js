// var fruit = ['mango', 'apple', 'lychee', 'watermelon'];

// console.log(fruit[2]);

// var fruits = ['mango', 'apple', ['lychee', 'watermelon'], 'lemon'];

// console.log(fruits[2][1]);

// var item = ['mango', 'apple', [1, 4, 7, 0], ['lychee', 'watermelon'], 'lemon'];

// console.log(item[2][3]);
//pop() method removes the last element from an array
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.pop();
console.log(elector);
//["lord buckethead", "elmo", "theresa may"]

//push() method adds a new element to an array (at the end)
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.push("gloria");
console.log(elector);
//["lord buckethead", "elmo", "theresa may", "mr fish finger", "gloria"]

//shift() method removes the first array element and "shifts" all other elements to a lower index
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.shift();
console.log(elector);
//["elmo", "theresa may", "mr fish finger"]

//unshift() method adds a new element to an array (at the beginning)
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.unshift("gloria");
console.log(elector);
//["gloria", "lord buckethead", "elmo", "theresa may", "mr fish finger"]

//join() method also joins all array elements into a string
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
console.log(elector.join());
//'lord buckethead,elmo,theresa may,mr fish finger'

//concat() method is used to join two or more arrays,This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
const electionPlaces = ["fitzroy", "st kilda", "collingwood", "brunswick"];
const placesToGo = elector.concat(electionPlaces);
console.log(placesToGo);
//["lord buckethead", "elmo", "theresa may", "mr fish finger", "fitzroy", "st kilda", "collingwood", "brunswick"]

//The indexOf() method returns the position of the first occurrence of a specified value in a string.This method returns -1 if the value to search for never occurs.

// pop, push,shift, unshift,join, concat, map, reducer, every, each, filter, indexof, find, reverse, slice,splice,sort