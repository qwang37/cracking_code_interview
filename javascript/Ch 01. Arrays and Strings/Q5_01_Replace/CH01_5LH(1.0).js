//Write a method to replace all spaces in a string with ‘%20’
function replace(str){
   return str.split(" ").join("20%");
}
console.log(replace("I am good."))
