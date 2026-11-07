function findOdd(A) {
  const map = new Map();
  A.forEach(n => {
    let count = map.has(n) ? map.get(n) : 0;
    map.set(n, ++count);
  });
  let result = undefined;
  map.forEach((count, key) => {
    if (count % 2 > 0) {
      result = key;
      return;
    }     
  })
  return result;
}

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))