const stringPalindrome = "abattyaba"

//start here!!

var value = stringPalindrome.length;

var estadoFinal=true;


for (let index = 0; index < value, value--; index++) {

    console.log(index,value);
    
    if (stringPalindrome[index] != stringPalindrome [value]) {
        estadoFinal = false;
        console.log(false);
        break;
    }
}

if (estadoFinal) {
    console.log("Palindrome");
}
if (!estadoFinal) {
    console.log("NO - >Palindrome");
}
