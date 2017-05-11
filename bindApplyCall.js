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

/*******************************************/

function greet2(lang1, lang2, lang3){
	console.log(`my name is ${this.name} and I write ${lang1}, ${lang2} and ${lang3}`);
}

// greet2 call
greet2.call(me, langs[0], langs[1], langs[2]);

greet2.apply(me, langs);