// Your code here

/*
  index.js
    defines saturdayFun function declaration as specified
      1) function exists
      2) uses the default activity 'roller-skate' when no arguments are passed
      3) permits the default activity to be overriden
    defines mondayWork function expression as specified
      4) function exists
      5) uses the default activity 'go to the office' when no arguments are passed
      6) permits the default activity to be overriden
    defines wrapAdjective function according to the specification
      7) function exists
      8) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
      9) when initialized with '||' creates a function that, when called, wrapsan adjective in a highlight
    defines an object called Calculator
      10) has a JavaScript Object called Calculator as a local variable
      that has a function called add
        11) Calculator.add exists
        12) calculates 1 + 3
      that has a function called subtract
        13) Calculator.subtract exists
        14) calculates 1 - 3
      that has a function called multiply
        15) Calculator.multiply exists
        16) calculates 1 * 3
      that has a function called divide
        17) Calculator.divide exists
        18) calculates 10 / 5
    Defines a function called actionApplyer
      19) exists
      receives two arguments: a starting integer and an array of functions
        20) returns the given starting point, unchanged, when the array is empty
        21) Given 13, returns 4 after being acted on by several functions

*/


/*

  1) index.js
       defines saturdayFun function declaration as specified
         function exists:
     ReferenceError: saturdayFun is not defined
      at Context.<anonymous> (test/indexTest.js:4:14)

  2) index.js
       defines saturdayFun function declaration as specified
         uses the default activity 'roller-skate' when no arguments are passed:
     ReferenceError: saturdayFun is not defined
      at Context.<anonymous> (test/indexTest.js:8:7)

  3) index.js
       defines saturdayFun function declaration as specified
         permits the default activity to be overriden:
     ReferenceError: saturdayFun is not defined
      at Context.<anonymous> (test/indexTest.js:12:7)

  4) index.js
       defines mondayWork function expression as specified
         function exists:
     ReferenceError: mondayWork is not defined
      at Context.<anonymous> (test/indexTest.js:18:14)

  5) index.js
       defines mondayWork function expression as specified
         uses the default activity 'go to the office' when no arguments are passed:
     ReferenceError: mondayWork is not defined
      at Context.<anonymous> (test/indexTest.js:22:7)

  6) index.js
       defines mondayWork function expression as specified
         permits the default activity to be overriden:
     ReferenceError: mondayWork is not defined
      at Context.<anonymous> (test/indexTest.js:26:7)

  7) index.js
       defines wrapAdjective function according to the specification
         function exists:
     ReferenceError: wrapAdjective is not defined
      at Context.<anonymous> (test/indexTest.js:32:14)

  8) index.js
       defines wrapAdjective function according to the specification
         when initialized with '*' creates a function that, when called, wraps an adjective in a highlight:
     ReferenceError: wrapAdjective is not defined
      at Context.<anonymous> (test/indexTest.js:36:20)

  9) index.js
       defines wrapAdjective function according to the specification
         when initialized with '||' creates a function that, when called, wrapsan adjective in a highlight:
     ReferenceError: wrapAdjective is not defined
      at Context.<anonymous> (test/indexTest.js:42:20)

  10) index.js
       defines an object called Calculator
         has a JavaScript Object called Calculator as a local variable:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:50:14)

  11) index.js
       defines an object called Calculator
         that has a function called add
           Calculator.add exists:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:55:16)

  12) index.js
       defines an object called Calculator
         that has a function called add
           calculates 1 + 3:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:59:16)

  13) index.js
       defines an object called Calculator
         that has a function called subtract
           Calculator.subtract exists:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:65:16)

  14) index.js
       defines an object called Calculator
         that has a function called subtract
           calculates 1 - 3:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:69:16)

  15) index.js
       defines an object called Calculator
         that has a function called multiply
           Calculator.multiply exists:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:75:16)

  16) index.js
       defines an object called Calculator
         that has a function called multiply
           calculates 1 * 3:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:79:16)

  17) index.js
       defines an object called Calculator
         that has a function called divide
           Calculator.divide exists:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:85:16)

  18) index.js
       defines an object called Calculator
         that has a function called divide
           calculates 10 / 5:
     ReferenceError: Calculator is not defined
      at Context.<anonymous> (test/indexTest.js:89:16)

  19) index.js
       Defines a function called actionApplyer
         exists:
     ReferenceError: actionApplyer is not defined
      at Context.<anonymous> (test/indexTest.js:96:16)

  20) index.js
       Defines a function called actionApplyer
         receives two arguments: a starting integer and an array of functions
           returns the given starting point, unchanged, when the array is empty:
     ReferenceError: actionApplyer is not defined
      at Context.<anonymous> (test/indexTest.js:101:9)

  21) index.js
       Defines a function called actionApplyer
         receives two arguments: a starting integer and an array of functions
           Given 13, returns 4 after being acted on by several functions:
     ReferenceError: actionApplyer is not defined
      at Context.<anonymous> (test/indexTest.js:111:9)

*/

function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  return function(adjective="special") {
    return `You are ${flair+adjective+flair}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a*b
  },
  divide: function(a, b) {
    return a/b
  }
}

function actionApplyer(i, a) {
  let value = i
  for (let i = 0; i < a.length; i++) {
    value = a[i](value)
  }
  return value
}
