/*String Rotation: Assume you have a method i 5 S u b s t r i n g which checks ifone word is a substring of another. 
Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one call to isSubstring 
(e.g., Uwaterbottleuis a rotation ofuerbottlewatU).*/

function IsSubstring(str1,str2){
   var str3 = str1 + str1;
   return str3.includes(str2);
}
console.log(IsSubstring("tabacofree","freetabaco"));