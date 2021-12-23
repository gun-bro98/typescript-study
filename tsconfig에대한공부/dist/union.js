"use strict";
function printGameInfo(game_data) {
    console.log(game_data);
}
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const game_obj = {
    name: 'League Of Legend',
    friends_count: 10
};
printGameInfo(game_obj);
const combinedAges = combine(24, 25, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine("24", "25", 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Park', 'as-text');
console.log(combinedNames);
