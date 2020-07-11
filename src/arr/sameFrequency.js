function sameFrequency(number1, number2) {
    // good luck. Add any arguments you deem necessary.

    number1 = number1 + '';
    number2 = number2 + '';

    if (number1.length !== number2.length) {
        return false
    }

    const freq1 = {}
    const freq2 = {}
    
    for (let index in number1) {
        freq1[number1[index]] = freq1[number1[index]] ? freq1[number1[index]] + 1 : 1
    }

    for (let index in number2) {
        freq2[number2[index]] = freq2[number2[index]] ? freq2[number2[index]] + 1 : 1
    }

    for (let key in freq1) {
        if (!freq2[key]) {
            return false
        }

        if (freq2[key] !== freq2[key]) {
            return false;
        }
    }

    return true
}

console.log(sameFrequency(1824, 24816));

function sameFrequency1(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }