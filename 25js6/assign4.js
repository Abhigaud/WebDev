let str = "My name is Abhishek Gaud and this is my code ";
function countVowels(str) {
    let ans = 0;
    let stri = str.toLowerCase();
    for (let i = 0; i < stri.length; i++) {
        if (stri[i] == 'a' || stri[i] == 'e' || stri[i] == 'i' || stri[i] == 'o' || stri[i] == 'u' ) {
            ans ++;
        }    
    }
    return ans;
}
console.log(countVowels(str));
