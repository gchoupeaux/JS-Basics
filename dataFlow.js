// if else if else
const num = 2;

if(num === 2){
	console.log('num equal 2');	
} else if (num === 3){
	console.log('num equal 3');	
} else {
	console.log('num different from 2 and 3');		
}

// for loop on array (exactly same thing for string)
// BEST PRACTICES USED "OF" NOT "IN" 
const arr = [1,2,3];

for (let element of arr){
	console.log(element);
}

// WARNING DON'T USE IN
for (let index in arr){
	console.log(arr[index]);
}

for (let i=0; i<arr.length; i++){
	console.log(arr[i]);
}

// for loop on object
const obj = { key1:'a',
							key2:'b',
							key3:'c'
						};

// WARNING USE IN NOT OF
for (let key in obj){
	console.log(obj[key]);
}

// do while loop
let i=10;
do {
	console.log(i);
	i--;
} while (i>0);


// while loop
i = 0;
while (i<10) {
	console.log(i);
	i++;
}

// switch
const test = 1;

switch (test){
	case 1:
		console.log('test = 1');
		break;
		
	case 2:
		console.log('test = 2');
		break;
		
	default:
		console.log('test != 2 et 3');
		break;
	
}