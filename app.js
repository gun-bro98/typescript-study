function printGameInfo(game_data) {
    console.log(game_data);
}
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number'){
    //   return +result;
    // }else {
    //   return result.toString();
    // }
    return result;
}
var game_obj = {
    name: 'League Of Legend',
    friends_count: 10
};
printGameInfo(game_obj);
var combinedAges = combine(24, 25, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine("24", "25", 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Park', 'as-text');
console.log(combinedNames);
