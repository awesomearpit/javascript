Array.prototype.newMap = function(callback) {
    const result = [];
    for(let index=0; index < this.length; index++) {
       result[index] = callback(this[index], index, this);
    }
    return result;
}

let arr = [1, 2, 3, 4];
let multiplyByTwo = arr.newMap(el => el * 2);
console.log(multiplyByTwo);
