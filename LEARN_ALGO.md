# LEARN ALGO

## links

[sort demonstration with animations](http://lwh.free.fr/pages/algo/tri/tri_shell.html)

Case : sort this array [3, 9, 7, 1, 6, 2, 8, 4, 5]     

## Sort by insertion
pseudo code:     
````

````
19 swaps are made for sort this array
Js:
````js
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let k = i; k > 0; k--) {
			if (arr[k] < arr[k-1]) {
				[arr[k], arr[k-1]] = [arr[k-1], arr[k]];
			}
		}
	}
	return arr;
}
````

## Sort by selection
pseudo code:     
````

````
9 swaps are made for sort this array
Js:
````js
function selectionSort(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		let k = i;
		for (let j = i+1; j < arr.length; j++) {
			if (arr[j] < arr[k]) {
				k = j;
			}
		}
		count++;
		[arr[i], arr[k]] = [arr[k], arr[i]]; 
	}
	console.log("count: " + count);
	return arr;
}
````
## Bubble sort
pseudo code:     
````
````
19 swaps are made for sort this array
Js:
````js
function bubbleSort(arr) {
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		
		let swapped = false;
		
		for (let j = arr.length - 1; j >= i+1; j--) {
			if(arr[j] < arr[j-1]) {
				[arr[j], arr[j-1]] = [arr[j-1], arr[j]];
				swapped = true;
				count++;
			}
			console.log('j = ' + j + '   |    ' + arr);
		}

		if(!swapped) {
				break;
		}
	}
	console.log('Count: ' + count);
	return arr;
}
````


## Shell sort
pseudo code:     
````
````
?? swaps are made for sort this array
Js:
````js
function insertion_sort (arr, gap, start) {

	for (let i = start + gap; i < arr.length; i += gap) {
		if (arr[i] < arr[i-gap]) {
			[arr[i], arr[i-gap]] = [arr[i-gap], arr[i]];
		}
	}
}

function shellSort(arrayToSort) {
	let arr = arrayToSort.slice(0);
	let gap = Math.floor(arr.length / 3);
	while ( gap > 0 ) {
		for (let i = 0; i < gap; i++) {
			insertion_sort(arr, gap, i);
		}
		gap = Math.floor(gap / 3);
	}
	return arr;
}
````


## Sort by fusion
```js
function triFusion(tab) {
  console.log("tab en entrée : ------------> " + tab);
  var reponse = [];
  var tabLength = tab.length;
  if(tabLength < 2) {
    return tab;
  } else {
    var halfSize = Math.ceil(tabLength / 2);
    console.log("halfSize: ", halfSize);
    var left = triFusion(tab.slice(0,halfSize));
    console.log("left: " +left);
    var right = triFusion(tab.slice(halfSize, tabLength));
    console.log("right: " + right);
    return fusion(left, right); 
  }
}
 
function fusion(tabLeft, tabRight) {
  var newArray = [];
  var tabLeftLength = tabLeft.length;
  var tabRightLength = tabRight.length;
  var cpteurL = 0;
  var cpteurR = 0;
 
  while((cpteurL < tabLeftLength) && (cpteurR < tabRightLength)) {
    if(tabLeft[cpteurL] < tabRight[cpteurR]) {
      newArray.push(tabLeft[cpteurL]);
      cpteurL += 1;
    } else {
      newArray.push(tabRight[cpteurR]);
      cpteurR +=1;
 
    }
  } 
  for(var i = cpteurL; i < tabLeftLength; i++) {
    newArray.push(tabLeft[i]);
  }
 
  for(var j = cpteurR; j < tabRightLength; j++) {
    newArray.push(tabRight[j]);
  }
  console.log("Fusion sorted array : ----------------------> " + newArray);
  return newArray;
}
```

## Fast sort /!\WIP/!\
https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.html

````
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);
````


````

function partition(left, right, pivot) {
	let leftPointer = left;
	let rightPointer = right - 1;

	while (arr[++leftPointer] < pivot) {

	

		while (rightPointer > 0 && arr[--rightPointer] > pivot) {

		}

		if (leftPointer >= rightPointer) {
			break;
		} else {
			[leftPointer, rightPointer] = [rightPointer, leftPointer];
		}
	}

}


function fastSort(arr) {
	let randNum = Math.floor(Math.random() * Math.floor(arr.length));
	

	while(true)
}

````

````
function quickWithParam(arr) {

  console.log('Array :' + arr);
  if(arr.length <= 1) {
    return arr;
  }

  let pivotPos = 0;
  let pivotValue = arr[pivotPos];
  let left = [];
  let right = [];
  
  console.log(arr);

  for(let i =0; i < arr.length; i++) {
  	if (arr[i] < pivotValue) {
		left.push(arr[i])
  	} else {
  		right.push(arr[i]);
  	}
  }
  
  //console.log("RIGHT: ", right);
  //console.log("LEFT: ", left);
  return quickWithParam(left).concat(pivotValue, quickWithParam(right));
}

console.log(quickWithParam([3,5,7,1,9,8,4,6,2]));


````

https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm
````

function partition(left, right, pivot) {
	let leftPointer = left;
	let rightPointer = right - 1;

	while (arr[++leftPointer] < pivot) {

	

		while (rightPointer > 0 && arr[--rightPointer] > pivot) {

		}

		if (leftPointer >= rightPointer) {
			break;
		} else {
			[leftPointer, rightPointer] = [rightPointer, leftPointer];
		}
	}

}


function fastSort(arr) {
	let randNum = Math.floor(Math.random() * Math.floor(arr.length));
	

	while(true)
}

````