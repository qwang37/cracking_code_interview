//Assume you have a method isSubstring which checks if one word is a substring of another Given two strings, 
//s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 
//(i e , “waterbottle” is a rotation of “erbottlewat”)

function IsSubstring(str1,str2){
   var str3 = str1 + str1;
   return str3.includes(str2);
}
console.log(IsSubstring("tabacofree","freetabaco"));
