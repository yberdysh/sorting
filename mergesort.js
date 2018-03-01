function mergeSort(array, secondArray){
	/*if(array.length){
		var newArray = split(array);
		merge(mergeSort(newArray[0], newArray[1]);
	}*/
//	return array[0];

	if(array.length === 1){
		return array[0]
	} else {
		var newArray = split(array);
		mergeSort();
	}
}

function split(wholeArray){
	var floored = Math.floor(wholeArray.length/2);
	var firstHalf = wholeArray.slice(0, floored);
	var secondHalf = wholeArray.slice(floored);

	return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
	return arr1.concat(arr2);
}