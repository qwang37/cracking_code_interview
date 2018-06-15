function duplicate(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) === i){        //why cannot use while
            newStr += str[i];
        }

    }
    return newStr;
}
    console.log(duplicate("ahahahahahaha"));
