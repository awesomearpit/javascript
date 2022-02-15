/**
 * 
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first.
 * An Anagram is a word, phrase or name formed by rearranging the letters of another,
 * such as cinema formed from iceman.
 * 
 */

function validAnagram(str1, str2) {
    let obj1 = {};
    let obj2 = {};

    for (let char of str1) {
        obj1[char] = ++obj1[char] || 1;
    }

    for (let char of str2) {
        obj2[char] = ++obj2[char] || 1;
    }

    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }

        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

/**
 * 
 * complexity: o(n) 
 * 
 */

console.log(validAnagram('az', 'za')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('', '')); // true
console.log(validAnagram('cinema', 'iceman')); // true