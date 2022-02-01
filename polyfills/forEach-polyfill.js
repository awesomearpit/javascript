Array.prototype.newForEach = function (callback, context) {
    for (let index=0; index<this.length; index++) {
        callback.call(context, this[index], index, this);
    }
}

const forEachData = [1, 2, 3, 4, 5];
forEachData.newForEach((el) => console.log(el));