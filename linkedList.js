// Linked list with 2 nodes O->O

var node1={
 data:null,
 next:null
};

node1.data="data1";

var node2={
 data:null,
 next:null
};

node2.data="data2";
node1.next=node2;//node1.next "points" to node2

var node3={
 data:null,
 next:null
};

node3.data="data3";
node2.next=node3;//node1.next "points" to node2

var node4={
 data:null,
 next:null
};

node4.data="data4";
node3.next=node4;//node1.next "points" to node2


//console.log(node1);

/*
{ data: 'data1',
  next: { data: 'data2',
  				next: { data: 'data3',
  								next: null } } }

function to log a linked list
the console function don't print over a depth of 3 nodes

each node must be like this:
var nodeX={
 data:null,
 next:null
};
*/

function printLinkedList(list){
	let tabul = '';
	let endBracket = '';
	console.log(`${tabul}{ data: '${list.data}',`);
	tabul += '  ';
	do{
		if (list.next !== null){
			console.log(`${tabul}next: { data: '${list.next.data}',`);
			// list.next become null for the last element
			list = list.next;
			tabul += '        ';
		}
		// print last element
		endBracket += ' }';
		if (list.next === null)
		{
			console.log(`${tabul}next: null${endBracket}`);
		}
	}while (list.next !== null);
}

//printLinkedList(node1);

function getLinkedListHeight(node1){
	let nodeNumber = 0;
	let lastNode = node1;
	while (lastNode.next !== null){
			lastNode = lastNode.next;
			nodeNumber++;
	}
	return nodeNumber;
}

// node constructor
function Node(data){
	this.data = data;
	this.next = null;
}

// return linked list of n nodes
function buildLinkedList(n){
	value = 0;
	var head = new Node(value);
	var lastNode = head;
	while (value+1<n){
		value++;
		//looking for the last node
		if(lastNode.next !== null){
			lastNode = lastNode.next;
		}
		lastNode.next = new Node(value);
	}
	return head;
}

var list = buildLinkedList(5);

console.log(list);
printLinkedList(list);
