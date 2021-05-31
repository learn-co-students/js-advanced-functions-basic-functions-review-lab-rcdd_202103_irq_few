// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity="go to the office")=> 
   `This Monday, I will ${activity}.`;


const wrapAdjective =(style="*") => (adjective="special")=> 
     `You are ${style}${adjective}${style}!`;
  
  
  const Calculator = {
    add: (a,b) => a + b,
    
    subtract: (a,b)=>a - b,
    
    multiply: (a,b)=>a * b,
    
    divide: (a,b)=>a / b
  };

const actionApplyer = (start, ray)=> {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}