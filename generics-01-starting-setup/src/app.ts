const names: Array<String> = []; //string[]
// names[0].split(" ");

//Promise<string>이라고 설정을 안해주면, 프로미스 체인할 때 인자에 대해서
//어떤 함수를 적용할 수 있을지 모른다. 그게 문자열이라도 문자열 관련된 함수를 쓸 수 없다.
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" THis is done");
  }, 2000);
  // reject(new Error("oh no"));
  console.log(reject);
});

promise.then((data) => {
  console.log(data.split(" "));
});
