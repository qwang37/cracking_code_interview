function IsSubstring(str1,str2){
   var str3 = str1 + str1;
   return str3.includes(str2);
}
console.log(IsSubstring("tabacofree","freetabaco"));