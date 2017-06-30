//recurcive function
/*count down function*/
function countDown(num){
	//base case => to get out of the function
	if (num === 0) return num;
	console.log(num);
	countDown(num-1);
}

countDown(10);

/*factorial function*/
function factorial(n){
	//base case
	if (n===1) return n;
	return n*factorial(n-1);
}

factorial(5);

/*Write a JavaScript program to get the integers in range (x, y). Go to the editor
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]*/
function range(start, end){
	// base case
	if (start === end-1) return[];
	var arr = range(start, end-1);
	arr.push(end-1);
	return arr;
}

range(2, 9);

/*You will be given a positive integer a. Fill in the method doStuff so that it adds up all the positive integers up to a and returns the sum. For example, when given 4 it should return 10 (4+3+2+1). */
function add(n){
	//base case
	if (n===1) return n;
	return n + add(n-1);
}

add(4);

/*compute the exponent of a number. Go to the editor
Note : The exponent of a number says how many times the base number is used as a factor.
8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.*/
function pow(num, exponent){
	//base case
	if (exponent === 1) return num;
	return num*pow(num,exponent-1);
}

pow(2,3);

/*Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.*/
function fibonacci(n){
	// base case
	if (n === 1) return [0,1];
	var arr = fibonacci(n-1);
	arr.push(arr[arr.length-2]+arr[arr.length-1]);
	return arr;
}

fibonacci(10);

//Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
/*
var gcd = function(a, b) {
	if (!b) {
  	return a;
	}
	console.log(`b=${b} a=${a}`);
  return gcd(b, a % b);
};
console.log(gcd(12, 6));
*/

/*Write a JavaScript program to check whether a number is even or not*/
function isEven(n){



}

isEven(11);
