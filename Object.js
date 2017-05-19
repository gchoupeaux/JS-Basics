var myObject = {}; //literal
var myObject2 = new Object(); //constructor also work but literal notation is better

// add keys to the object
myObject.param1 = 'paramValue'; //dot notation
myObject.param2 = 2;
myObject['key3'] = [1,2,3,4]; //bracket notation

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
myObject.hasOwnProperty('param1'); //true
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
