function insertSrot(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j 
        for ( j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
        console.log(arr);
        
    }
    return arr
}



console.log(insertSrot([666666, 4, 666, 44, 13,3]));

