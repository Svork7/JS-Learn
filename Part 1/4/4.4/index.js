// задача 1
function makeUser() {
  return {
    name: 'John',
    ref: this,
  }
}

let user = makeUser()

alert(user.ref.name) // Error: Cannot read property 'name' of undefined

// Значение this внутри makeUser() - undefined, потому что оно вызывается как функция. Принимается текущее значение this функции makeUser().

// задача 2
let calculator = {
  read() {
    this.a = +prompt('введите значение a', 0)
    this.b = +prompt('введите значение b', 0)
  },

  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  },
}

// задача 3
let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep() {
    alert(this.step)
    return this
  },
}
