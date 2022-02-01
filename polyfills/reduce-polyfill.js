Array.prototype.newReduce = function (callback, initialValue) {
    let accumulator = initialValue || null;
    for (let index = 0; index < this.length; index++) {
        if (accumulator) {
            accumulator = callback.call(accumulator, accumulator, this[index], index, this);
        } else {
            accumulator = this[index];
        }
    }
    return accumulator;
}

const data = [1, 2, 3, 4, 5];
const sum = data.newReduce((previousValue, curentValue) => previousValue + curentValue);
console.log(sum);