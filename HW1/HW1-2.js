class Stack {

  constructor() {
    this.stack = new Map ()
    this.ctr = 0
    this.startOfPrint = 0
    this.formattedOutput = ``
    this.topOfStackKey
  }

  push(stringToInsert) {

    if (typeof(stringToInsert) != 'string') {
      console.log(`${stringToInsert} is not of type String`)
      return
    }

    this.stack.set(this.ctr, stringToInsert)
    this.ctr++
  }

  check() {
    for (const value of this.stack.values()) {
      if (this.startOfPrint === 0) {
        this.formattedOutput = `"${value}"`
        this.startOfPrint = 1
        continue
      }
      this.formattedOutput = this.formattedOutput + `, "${value}"`
    }
    this.formattedOutput = "[" + this.formattedOutput + "]"
    console.log(this.formattedOutput)
    this.formattedOutput = ""
    this.startOfPrint = 0
  }

  peek() {

    if (!this.stack.size) {
      console.log("Stack is currently empty")
      return
    }

    for (const key of this.stack.keys()) {
      this.topOfStackKey = key
    }
    this.topOfStack = this.stack.get(this.topOfStackKey)
    return this.topOfStack
  }

  pop() {

    if (!this.stack.size) {
      console.log("Stack is currently empty")
      return
    }

    for (const key of this.stack.keys()) {
      this.topOfStackKey = key
    }
    this.stack.delete(this.topOfStackKey)
    return
  }

}

const testStack = new Stack()
testStack.push("Hello")
testStack.push("Ey")
testStack.check()
testStack.pop()
testStack.check()
testStack.pop()
testStack.check()
testStack.pop()
testStack.peek()
testStack.push("Annyeong")
const topOfStack1 = testStack.peek()
testStack.check()
console.log(topOfStack1)
testStack.push("MyNameIsJeff")
const topOfStack2 = testStack.peek()
testStack.check()
console.log(topOfStack2)

/* THIS CONTAINS STACK IF ARRAYS ARE IMPLEMENTED

class Stack {

  constructor() {
    this.array = [];
  }

  push(stringToInsert) {
    if (typeof(stringToInsert) != 'string') {
      console.log(`${stringToInsert} is not of type String`)
      return
    }

    this.array.push(stringToInsert)
  }

  check() {
    console.log(this.array)
  }

  peek() {
    if (!this.array.length) {
      console.log("Stack is currently empty")
      return
    }

    const topOfStackIndex = this.array.length - 1
    const topOfStack = this.array[topOfStackIndex]
    return topOfStack
  }

  pop() {
    if (!this.array.length) {
      console.log("Stack is currently empty")
      return
    }

    this.array.pop()
  }

}
*/
