function unique(str){
  return [...new Set(str.split(""))].join("") === str.split("").join("");//ES2015
}
console.log(unique("hapy"));

 function Unique(str){
  var Arr = str.split("");
  var newArr = [];
  for(var i = 0; i < str.length; i++){
      if(newArr.indexOf(Arr[i])===-1){
          newArr.push(Arr[i]);
      }
  }
  return newArr.join("") === str;
//CH01_1_LH(1.0)

}
console.log(Unique("abca"));

