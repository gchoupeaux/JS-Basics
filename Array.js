//Array

//WARNING
console.log([1,2,3] === [1,2,3]);
//false because an array is not a scalar value like number or string

const arr = [1,2,3];

[1,2,3].length; //3
let popped = 0;
let shifted = 0;

//isArray
Array.isArray(arr);//true
Array.isArray(1);//false
Array.isArray('foobar');//false

// pop/push shift/unshift
popped = arr.pop(); // delete last array element and return the deleted el
console.log(popped); //3
console.log(arr); //[1,2];

arr.push(3,4); // add element at the end
console.log(arr); //[1,2,3];

shifted = arr.shift(); //delete first element and return the deleted el
console.log(shifted); //1
console.log(arr);//[2,3]

arr.unshift(0,1); // add element at the front
console.log(arr);

//join
arr.join(); //'0,1,2,3,4'
arr.join(',');//'0,1,2,3,4'
arr.join('');//'01234'
arr.join('@');//'0@1@2@3@4'
[1,'2',3].join('');//'123' same thing with an array of string or number

//reverse
arr.reverse();//[ 4, 3, 2, 1, 0 ]

//concat
const newArr = arr.concat(5,6,7);//[ 4, 3, 2, 1, 0, 5, 6, 7 ]
console.log(newArr);
console.log(arr); //WARNING doesn't mutate the input arr

//slice
var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, 3);
console.log(a);      // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']

//splice
var deletedElement = a.splice(1,2); // 2 elemenst to delete starting at index 1
console.log(a); //[ 'zero', 'three' ]
console.log(deletedElement); //[ 'one', 'two' ]

//METHODS with callback function in argument

//every used to COMAPRE 2 ARRAYS for example
// return a boolean exit as soon as one test is false
const arr1 = ['a','b','c'];
const arr2 = ['a','b','c'];
const areEquals = arr1.every(function(el, index){
	return el===arr2[index];
});
console.log(areEquals);

//forEach executes a provided function for each element
arr1.forEach(function(el, index, array){
	console.log(`arr1[${index}]=${el}, ${array}`);
});

//filter return element complient to the condition
const numbers = [1,1,2,3,4,5,6];
const newArr1 = numbers.filter(function(el,index, arr){
	return el%2===0;
});
console.log(newArr1);

//map return an array with element of the array modified
const newArr2 = numbers.map(function(el, index, arr){
	return el*10;
});
console.log(newArr2);

//reduce return value result fron reduction
result = numbers.reduce(function(accumulator, el, index, arr){
	return accumulator += el;
},0);
console.log(result);

//sort
const unsortedArray = [1,6,2,5,4,3,6];

const sortedArray1 = unsortedArray.sort(compareAscending);
console.log(sortedArray1);

function compareAscending(el1, el2){
	return el1-el2;
}

function compareDescending(el1, el2){
	return el2-el1;
}
