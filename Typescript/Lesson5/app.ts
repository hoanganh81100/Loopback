function getArray<T>(items:T): T[] {
  return new Array<T>().concat(items);
}
//let myNumArr = getArray<number>([10000])
//let myStrArr = getArray<string>(['Hello World !!!'])
let myNumArr = getArray([100, 200, 300, 400, 500])
let myStrArr = getArray(['Hello', 'World', '!!!'])
console.log(myNumArr);
console.log(myStrArr);
//myNumArr.push('O'); Compiler error
//myStrArr.push(600); Compiler error