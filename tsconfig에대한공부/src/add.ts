const lists = ["토끼", "거북이", "말"];
for (const value of lists) {
  console.log(value);
}
function plus(data1: number | string, data2: number | string) {
  if (typeof data1 === "number" && typeof data2 === "number") {
    return data1 + data2;
  }
  return;
}

function plusOthers(...numList: number[]) {
  const number_lists = numList.reduce((curResult, curValue) => {
    console.log("current result: " + curResult);
    console.log("current Value: " + curValue);
    return curResult + curValue;
  }, 0);
  console.log("결과 ", number_lists);
}
plusOthers(10, 20, 30, 40);

console.log(plus(5, 10));
