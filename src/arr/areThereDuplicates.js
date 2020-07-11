function areThereDuplicates() {
    
    let frequencyCounter = {};

    for (let key in arguments) {
        frequencyCounter[arguments[key]] = frequencyCounter[arguments[key]] ? frequencyCounter[arguments[key]] + 1 : 1
    }

    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true
        }
    }

    return false
}

console.log(areThereDuplicates(1824, 24816, 55, 666, 66, 777, 66));

console.log(areThereDuplicates(1824, 24816, 55, 666, 66, 777, 66));

function areThereDuplicates1() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }


  function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
  }
