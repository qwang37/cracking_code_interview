function unique(str){
  return [...new Set(str.split(""))] === str.split("");
}
unique("happy");
