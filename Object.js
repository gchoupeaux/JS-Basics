var myObject = {}; //literal
var myObject2 = new Object(); //constructor also work but literal notation is better

// add keys to the object
myObject.key1 = 'keyValue'; //dot notation
myObject.key2 = 2;
myObject['key3'] = [1,2,3,4]; //bracket notation

// delte key
delete(obj[key]);

//add Function
myObject.myFunction = function(){};

console.log(JSON.stringify(myObject));
//{"param1":"paramValue","param2":2}

/*----------------------------------------------*/
// notice the use of this, this is a place holder
var me = {
	name:'Gui',
	age:33,
	speak: function(){console.log(`Hi I'm ${this.name}`)}
};

console.log(me.name); //Gui
me.speak(); //notice the bracket for calling the function
//Hi I'm Gui

/*-----------------------------------------------*/
// check if an object has a property
myObject.hasOwnProperty('param1'); //true myObject.param1 !== undefined
myObject.hasOwnProperty('foobar'); //false

// type of
typeof(1); //number
typeof('2'); //string
typeof(myObject); //object
typeof([1,2,3]); //object, notice doesn't return array

/*-----------------------------------------------*/
// constructor, notice the capital letter
function Person(name, age){
	this.name = name;
	this.age = age;
	this.greet = function(){console.log(`Hi my name is ${name}`)};
}

var gui = new Person('Gui',33);
gui.greet();

/*-----------------------------------------------*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // ['2', '7', '100']
