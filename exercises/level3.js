function lvl3exercise1 () {
  // Create strings "hello" and a "world", return the concatenation of the two

  return "hello" + "world";
}
console.log(lvl3exercise1( ));
// ---------------------

function lvl3exercise2 () {
  // Create a "hello" and a 12, return the concatenation of the two
  let s1 = "hello";
  let s2 = 12;
  result = s1 + s2;
  return result;
}
console.log(lvl3exercise2 ())
// ---------------------


function lvl3exercise3 () {
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
  let num1 = 12;
  toText = num1.toString();
  return toText;

}
console.log(lvl3exercise3())

// ---------------------

function lvl3exercise4 () {
  // Create a "hello world!" string. Return the length of the string
  let str = "hello world!";
  // Length = str.length;
  return str.length; //it also calculate the space
}
console.log(lvl3exercise4 ())
// ---------------------

function lvl3exercise5 () {
  // Create a "hello world!" string. Return the index of the word "world".
  let indx = "hello world!";
  // indxNum = indx.indexOf("world");
  return indx.indexOf('world');
}
console.log(lvl3exercise5())
