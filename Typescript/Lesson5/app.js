function getArray(items) {
    return new Array().concat(items);
}
//let myNumArr = getArray<number>([10000])
//let myStrArr = getArray<string>(['Hello World !!!'])
var myNumArr = getArray([100, 200, 300, 400, 500]);
var myStrArr = getArray(['Hello', 'World', '!!!']);
console.log(myNumArr);
console.log(myStrArr);
//myNumArr.push('O'); Compiler error
//myStrArr.push(600); Compiler error
