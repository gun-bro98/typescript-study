"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log('Result: ' + num);
}
function printResult2(num) {
    console.log('Result2: ' + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    console.log(cb(result));
}
console.log(printResult1(add1(5, 12)));
printResult1(add1(5, 12));
let combineValues;
combineValues = add1;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    return result;
});
