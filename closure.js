// Closures IIFE

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


/*-------------------------------------------------*/

function makeAdder(x){
	return function(y){
		console.log(`x=${x} y=${y}`);
		return (x+y);
	};
}

const add10 = makeAdder(10);

add10(5);
