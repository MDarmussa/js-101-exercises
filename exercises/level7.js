// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many times as the input number.
//  If the input is anything other than a positive integer
//  return an empty array
//
// Name the function "finalFunction"

function finalFunction(num) { 
     if (num > 0) {
          let str = [];
          let notherStr = 'hello'
          for (let i=0; i < num; i++) {
               str.push(notherStr);
          }
          return str;
     } else {
          let str2 = [];
          return str2;
     }
}
// console.log(finalFunction())



// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number. If the input is anything other than a positive
// integer return an empty array
//
// Name the function "finalFunction"
// Another way - pushing from 0 - giving number.

function finalFunction(enterAnumber) {
     if (enterAnumber > 0) {
          let arr = [];
          for (let i=0; i<enterAnumber; i++) {
               arr.push(i)
          }
          return arr;
     } else {
          let arr2 = []
          return arr2;
     }
}
console.log(finalFunction(-10))

//----------------------------------
//printing input number positive and negative using nested loop

function finalFunction(enterAnumber) {
     if (enterAnumber > 0) {
          let arr = [];
          for (let i=1; i<=enterAnumber; i++) {
               arr.push(i);
          }
          return arr;
     } else if (enterAnumber < 0) {
          let arr2 = [];
          let i = -1;
          while (i >= enterAnumber) {
               arr2.push(i);
               i--;
          }
          return arr2;
     }
     else {
          let arr3 =['Plz enter another number'];
          // console.log()
          return arr3;
     }
}
// console.log(finalFunction(0))

//-----------------

//function to print an input of a string and how many time

function finalFunction (num, string) {
     if(num > 0) {
       let arr = [];
       let str = ''
       for (i=0; i<num; i++) {
         arr.push(string)
   
       }
       return arr;
     } else if (num < 0) {
       let arr1 = "Enter a positive number"
       return arr1;
     }
    else {
     let arr2 = [];
     return arr2;
   }
   }
   
   console.log(finalFunction(-1, 'mo'))