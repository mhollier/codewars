function spiralize(n) {
    var matrix = new Array(n);
    for (var i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(n);
        matrix[i].fill(0, 0);
    }

    for (var step = 0; step < n / 2; step = step + 2) {
        spiralizeFill(matrix, step, n - step - 1, step, n - step - 1);
    }
    console.log(`${n}`)
    for (var i = 0; i < matrix.length; i++) {
        console.log(i + '\t' + matrix[i]);
    }    
    return matrix;
}

function spiralizeFill(matrix, x1, x2) {
    // console.log(`${x1} ${x2}`);
    matrix[x1].fill(1, x1, x2 + 1);
    if (x2 - x1 >= 2) {
        matrix[x2].fill(1, x1, x2 + 1);
    }
    for (var y = x1; y <= x2; y++) {
        matrix[y][x2] = 1;
    }
    for (var y = x1 + 2; y <= x2; y++) {
        matrix[y][x1] = 1;
    }
    if (x1 - 1 >= 0) {
        matrix[x1][x1 - 1] = 1;
    }
}

// var result = spiralize(5);
// var result = spiralize(8);
// var result = spiralize(10);
// var result = spiralize(22);
spiralize(11);
// for (var i = 0; i < result.length; i++) {
//     console.log(i + '\t' + result[i]);
// }
