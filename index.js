// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

mondayWork = function (activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper='*') {
  return function (adj='special') {
    return `You are ${wrapper}${adj}${wrapper}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

function actionApplyer(start, fncs=[]) {
  if (!(fncs.length)) return start
  
  for(let i = 0; i < fncs.length; i++){
    start = fncs[i](start)
  }
  
  return start
}