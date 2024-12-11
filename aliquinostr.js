let arr = [1, 2, null, 4, 5, null, 7];
let result = arr.filter(x => x !== null && x !== undefined);
console.log(result[0]);
