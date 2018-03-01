function bubbleSort(array){
  var arr = array;
  if (array.length <= 1){
    return array;
  } else {
    for (var i = 0; i < arr.length; i++){
      for (var j = 0; j < arr.length; j++){
        compare();
        if (arr[j] > arr[j+1]){
        var result = swap(arr[j], arr[j+1]);
        arr[j] = result[0];
          arr[j+1] = result[1]
        }
      }
    }
  }
  return arr;
}


function swap(var1, var2){
  return [var2, var1];
}

function compare(){
  return undefined;
}
