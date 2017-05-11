//recurcive function

function countDown(num){
	//base case => to get out of the function
	if (num === 0) return num;
	console.log(num);
	countDown(num-1);
}

countDown(10);