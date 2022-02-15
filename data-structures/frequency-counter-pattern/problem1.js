/**
 * 
 * Write a function same which accepts two arrays.
 * The function should return true if every value in the array
 * has its corresponding value squared in the second array.
 * The frequency of value must be the same.
 * 
 */


// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

/**
 * 
 * complexity: o(n2) 
 * 
 */


function same(arr1, arr2) {
    // for frequency pattern we can create a object.
    let obj1 = {};
    let obj2 = {};

    // insert values in object 
    for (let el of arr1) {
        obj1[el] = ++obj1[el] || 1;
    }

    for (let el of arr2) {
        obj2[el] = ++obj2[el] || 1;
    }

    // compare both objects.
    for (let key in obj1) {

        //for know about 'in' operator
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
        if (!(key ** 2 in obj2)) {
            return false;
        }

        if (obj1[key] !== obj2[key ** 2]) {
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
console.log(same([1, 2, 3, 1], [1, 4, 9])); // true
console.log(same([1, 2, 3], [1, 4, 9, 1])); // false
console.log(same([1, 9, 1, 1], [1, 4, 9, 1])); // false
console.log(same([1, 2, 3], [1, 4, 9])); // true
