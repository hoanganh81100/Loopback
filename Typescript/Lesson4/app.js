function LoggerAndReturn(thing) {
    return thing;
}
var message1 = LoggerAndReturn('Hello World !!!');
var message2 = LoggerAndReturn('Hello World !!!');
var message3 = LoggerAndReturn(10000);
console.log(message1);
console.log(message2);
console.log(message3);
