//Number

let result = 0;

//Convert numeric strings to numbers
result = Number('123');     // 123
console.log(result);
result = Number('12.3');    // 12.3
console.log(result);
result = Number('');       // 0
console.log(result);
result = Number('0x11');   // 17 (Hexadecimal)
console.log(result);
result = Number('0b11');    // 3 (Binary)
console.log(result);
result = Number('0o11');    // 9 (Octal)
console.log(result);
result = Number('foo');    // NaN
result = Number('100a');    // NaN
console.log(result);

//Return value true if the given value is NaN and its type is Number; otherwise, false.
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true

// Number to string
//radixOptional. An integer between 2 and 36 specifying the base to use for representing numeric values. 
console.log((17.2).toString());   // displays '17.2'
console.log((6).toString(2));       // displays '110'
console.log((254).toString(16));  // displays 'fe'