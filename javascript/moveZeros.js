function moveZeros(arr) {
    let working = Array(arr.length).fill(0);
    let j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            working[j++] = arr[i];
        }
    }
    return working;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
