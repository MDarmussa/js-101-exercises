function lvl6exercise1 (num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  if (num === 1) {
    return 'hello';
  } else if (num === 2) {
    return 'world';
  } else {
    return 'bye';
  }
}
// console.log(lvl6exercise1(2))
//-----------------

function lvl6exercise2 () { //Modified by adding a parameter for input test
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = []
  for(let i=0; i<10; i++) {
    arr.push('hello');
  }
  return arr;
}
// console.log(lvl6exercise2());
//------------ xxxxx ------------------------------ extra made up
// made up - entering a value and print an array with the value given.
function lvl6exerciseX (num) {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = []
  for(let i=0; i<num; i++) {
    arr.push('hello');
  }
  return arr;
}
// console.log(lvl6exerciseX(5));

//-----------------

function lvl6exercise3 () {
  // Empty this array using a while loop and return it
  var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'];
  //solve
  while (arr.length) {
    var newarr = []
    let x = arr.pop();
    // arr.push(newarr);
    arr--;
    // return empty;
  }
  return newarr;
}
console.log(lvl6exercise3());