// задача 2

// сработает
function User(name) {
  this.name = name
}

let user = new User('John')
let user2 = new user.constructor('Pete')

alert(user2.name)

//не сработает
function User(name) {
  this.name = name
}
User.prototype = {}

let user = new User('John')
let user2 = new user.constructor('Pete')

alert(user2.name)