/*String Compression: Implement a method to perform basic string compression 
using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. 
If the "compressed"string would not become smaller than the original string, 
your method should return the original string. 
You can assume the string has only uppercase and lowercase letters (a - z). */


module.exports = function Compression(str){
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

