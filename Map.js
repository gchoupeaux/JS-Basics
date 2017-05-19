/* map (or also called hash table)
The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value.*/

const myMap = new Map();

//Returns the number of key/value pairs in the Map object.
//NOTICE: don't use length
myMap.size;

//Map.prototype.set(key, value)
myMap.set('key1', 1);
myMap.set('key2', '2');
myMap.set(3, 'three');

//Returns the value associated to the key, or undefined if there is none.
console.log(myMap.get('key1')); //1
console.log(myMap.get('key2')); //2
console.log(myMap.get(3));      //3
console.log(myMap.get('three')); //undefined

// remove all keys value of the map
//myMap.clear();

// delete on key
myMap.delete('key1');

// check key presence Returns a boolean
myMap.has('key1');

// Interation of a map
// NOTICE keyword OF
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}

//.keys() => Returns a new Iterator object that contains the keys
for (var key of myMap.keys()) {
  console.log(key);
}

//.values() => Returns a new Iterator object that contains the values
for (var value of myMap.values()) {
  console.log(value);
}

myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});

//.entries() => Returns a new Iterator object that contains an array of [key, value]
for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}


/* DISPLAY A MAP IN THE CONSOLE with spread operator*/
var kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myOtherMap = new Map(kvArray);

myOtherMap.get('key1'); // returns "value1"

// Use the spread operator to transform a map into a 2D key-value Array
console.log([...myOtherMap]); // Will show you exactly the same Array as kvArray

// Or use the spread operator on the keys or values iterator to get
// an array of only the keys or values
console.log([...myOtherMap.keys()]); // Will show ["key1", "key2"]
