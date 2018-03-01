function bubbleSort(array){
  var arr = array;
  if (array.length <= 1){
    return array;
  } else {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] > arr[i+1]){
        var result = swap(arr[i], arr[i+1]);
        arr[i] = result[0];
        arr[i+1] = result[1]
      }
    }
  }
  return arr;
}

function swap(var1, var2){
  return [var2, var1];
}
