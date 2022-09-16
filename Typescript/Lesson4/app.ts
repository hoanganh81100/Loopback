function LoggerAndReturn<T>(thing:T): T {
  return thing;
}
const message1: string = LoggerAndReturn<string>('Hello World !!!')
const message2: string = LoggerAndReturn('Hello World !!!')
const message3: number = LoggerAndReturn(10000)
console.log(message1)
console.log(message2)
console.log(message3)