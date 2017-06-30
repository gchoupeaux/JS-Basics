//How To Use .call(), .apply() and .bind() In Javascript

// call()
var obj = {num:2};

var addToThis = function(a){
	return this.num + a;
};

console.log(addToThis.call(obj, 3)); // functionName.call(obj, funcrionAgurments)

// call() with more than arguments
var addToThis2 = function(a, b, c){
	return this.num + a + b +c;
};

console.log(addToThis2.call(obj, 3, 4, 5));

// apply() => 2nd argument is an array
console.log(addToThis2.apply(obj, [3, 4, 5]));

// bind() => return a function not a value
var bound = addToThis2.bind(obj);

console.log(bound(1,2,3));

// 1 - Example
const me ={
	name:'Gui',
	age:33
};
const langs = ['js', 'py', 'Ruby'];
function greet(){
	console.log(`my name is ${this.name}`);
}
// bind greet at me
var myGreet = greet.bind(me);
// call greet
myGreet();

// 2- Example
function greet2(lang1, lang2, lang3){
	console.log(`my name is ${this.name} and I write ${lang1}, ${lang2} and ${lang3}`);
}
// greet2 call
greet2.call(me, langs[0], langs[1], langs[2]);
greet2.apply(me, langs);
