
function countUniqueValues (arr) {
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        console.log(j, i);
        if(arr[i] === arr[j]) {
            console.log("if");
            j++;
        } else {
            console.log("else");
            let temp = arr[i+1];
            console.log("temp", temp);
            arr[i+1] = arr[j];
            console.log(arr[i+1], arr[j]);
            arr[j] = temp;
            console.log(arr[j]);
            i++;
            j++;
            console.log("arr", arr);
        }

        // console.log(arr);
    }

    // console.log(arr);
    // for (let i=0, j=1; i < arr.length; i++) {
        
    // }
}

// countUniqueValues([1, 1, 1, 1, 2]);
countUniqueValues([1, 5, 2, 6, 2, 1, 5, 7]);

//     i
// [1, 5, 2, 6, 2, 1, 5, 7];
//        j