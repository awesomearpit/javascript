/*

Problem Statment:- Write a program to count the characters of string

*/


function charCount(str) {
    let obj = {};
    for (let char of str) {
        // instead of this alphanumeric function we can also do by making a regex, 
        // but regex is slower and it is also not compatible with all browsers.
        // /[a-z0-9]/.test(char)
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;

            // longer way to do this
            // if (obj[char] > 0) {
            //     obj[char]++;
            // } else {
            //     obj[char] = 1;
            // }
        }
    }
    return obj;
}

function isAlphaNumeric(str) {
    const code = str.charCodeAt(0);
    // (code >= 48 && code <= 57) --> (0 - 9)
    // (code >= 97 && code <= 122) --> (a - z)
    // (code >= 65 && code <= 90) -->  (A - Z)
    if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
        return true;
    }
    return false;
}

console.log(charCount("Hello, Arpit this side!")); 
// {h: 2, e: 2, l: 2, o: 1, a: 1, r: 1, p: 1, i: 3, t: 2, s: 2, d: 1}