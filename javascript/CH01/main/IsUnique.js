/* Is Unique: Implement an algorithm to determine if a string 
has all unique characters. What if you cannot use additional data structures?*/

//@param {string[]}
//@return boolean

module.exports = function unique(str) {
  return [...new Set(str.split(""))].join("") === str.split("").join("");//ES2015
}


module.exports = function Unique(str) { //push the unique character to a new empty array
  var Arr = str.split("");
  var newArr = [];
  for (var i = 0; i < str.length; i++) {
    if (newArr.indexOf(Arr[i]) === -1) {
      newArr.push(Arr[i]);
    }
  }
  return newArr.join("") === str;
}


