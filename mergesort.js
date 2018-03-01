function mergeSort(array){
	/*if(array.length){
		var newArray = split(array);
		merge(mergeSort(newArray[0], newArray[1]);
	}*/
//	return array[0];

	if(array.length === 1){
		return array[0];
	} else {
		var splitArray = split(array);
		merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
	}
}

function split(wholeArray){
	var floored = Math.floor(wholeArray.length/2);
	var firstHalf = wholeArray.slice(0, floored);
	var secondHalf = wholeArray.slice(floored);

	return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
	if(arr1 < arr2){
		return arr1.concat(arr2);
	} else if (arr1 > arr2){
		return arr2.concat(arr1);
	}
}