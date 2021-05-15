// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(outerPara = "*") {
  return function(adj = "special") {
    return `You are ${outerPara}${adj}${outerPara}!`;
  }
}

const encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
  add(a, b) {
    
    return a + b;
    
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    
    return a * b;
    
  },
  divide(a, b) {
    
    return a / b;
    
  }
}

function actionApplyer(num, arr = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]){
  let result = num;
  for(let i=0; i<arr.length; i++){
    result = arr[i](result);
  }
  
  return result;

}





