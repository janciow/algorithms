function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  function pivot(arr, startIndex = 0, endIndex = arr.length) {
    let swapIdx = startIndex;
    let pivot = arr[startIndex]
    for (let i = startIndex + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i)
      }
    }
    swap(arr, startIndex, swapIdx)
    return swapIdx
  }

  console.log(pivot([5, 55, 44, 4, 666, 7777, 55]));
  