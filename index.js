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
  add: function(x, y){
    return x+y
  },
  subtract: function(x,y){
    return x-y
  },
  multiply: function(x,y){
    return x*y
  },
  devide: function(x,y){
    return x/y
  },
}

function actionApplyer(start, fncs=[]) {
  if (!(fncs.length)) return start
  
  for(let i = 0; i < fncs.length; i++){
    start = fncs[i](start)
  }
  
  return start
}