// задача 1
/*Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.
*/

// ответ: возможно

let obj = {}

function A() {
  return obj
}
function B() {
  return obj
}

alert(new A() == new B())

// задача 2
function Calculator() {
  this.read = function () {
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  }

  this.sum = function () {
    return this.a + this.b
  }

  this.mul = function () {
    return this.a * this.b
  }
}

// задача 3
function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function () {
    this.value += +prompt('Сколько добавить?', 0)
  }
}

let accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
alert(accumulator.value)
