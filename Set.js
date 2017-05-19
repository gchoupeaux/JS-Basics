// Set The Set object lets you store unique values of any type, whether primitive values or object references.

var mySet = new Set();

mySet.add(1);
mySet.add('two');
mySet.add([1,2,3]);
mySet.add(5);



mySet.has(1); //true
mySet.has(3); //false

mySet.size; //3

mySet.delete(5); //removes 5

mySet.clear(); //delete all the element

// convert Set object to an Array object, with Array.from
var myArr = Array.from(mySet);
// or the spread operator
console.log([...mySet]);


/*----------------------------------------*/
// iterate over items in set
// logs the items in the order:
// 1
// two
// [ 1, 2, 3 ]
for (let item of mySet) console.log(item);
for (let item of mySet.keys()) console.log(item);
for (let item of mySet.values()) console.log(item);
for (let [key, value] of mySet.entries()) console.log(key);
//NOTICE: KEY AND VALUE ARE THE SAME

// Iterate set entries with forEach
mySet.forEach(function(value) {
  console.log(value);
});

/*----------------------------------------*/
// intersect can be simulated via
var intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
var difference = new Set([...set1].filter(x => !set2.has(x)));
