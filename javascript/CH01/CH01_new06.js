function compress(str){
   var newStr = "";
   var count = 0;
   for(var i = 0; i < str.length; i++){
       count++;
       if(str[i+1] !== str[i]){
           newStr += str[i] + count;
           count = 0;
       }
   }
    if(newStr.length < str.length){
       return newStr;
    }
    else{
       return str;
    }

}

console.log(compress("aabccdd"));