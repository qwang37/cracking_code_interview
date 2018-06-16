//Implement an algorithm to determine if a string has all unique characters What if you can not use additional data structures?
function unique(str){
  return [...new Set(str.split(""))] === str.split("");
}
unique("happy");
