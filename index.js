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

let Calculator;
Calculator = {
  add: function(x, y){return x+y},
  subtract: function(x,y){return x-y},
  multiply: function(x,y){return x*y},
  devide: function(x,y){return x/y},
}

function actionApplyer(start, fncs=[]) {
  return !fncs ? start : fncs.forEach()
  
  if (!fncs.length) return start
  
  fncs.forEach(fnc => fnc(start))
  
  return start
}