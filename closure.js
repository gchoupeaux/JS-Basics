// CLOSURE simplest exemple:
// any function using variable from outside is a closure


// 1 - Example

// variable defined outside the function are available inside the function => lexical scoping
var passed = 3;
var addTo = function(){
	var inner = 2;
	// inner variable are not available outside the function
	return passed + inner;
};
console.log(addTo());

var passed = 4;
// now passed id equal to 4
console.log(addTo());

// In https://jsfiddle.net/
console.dir(addTo);
/*
you can see
Closure (window.onload)
passed:3
*/

// Closure => function with preserve data
// 2- example

var addTo = function(passed){ // outer funtion

	var add = function(inner){ // inner function
		return passed + inner;
	};

	return add;
};

var addThree = new addTo(3); // 3 is preserved
var addFour = new addTo(4);

console.log(addThree(1)); // 1 is the inner
console.log(addFour(1));


// 3 - Example

function petCounter(pet){
	// NOTICE: counter IS NOT REINITIALZED at the second call
	let counter = 0;
	return function(){
		counter += 1;
		return `you have ${counter} ${pet}`;
	};
}

const kittenCounter = petCounter('kitten');
const dogCounter = petCounter('dog');

console.log(`First call: '${kittenCounter()}'`);
console.log(`Second call: '${kittenCounter()}'`);

dogCounter();


// 4 - Example

function makeAdder(x){
	return function(y){
		console.log(`x=${x} y=${y}`);
		return (x+y);
	};
}

const add10 = makeAdder(10);
add10(5);
