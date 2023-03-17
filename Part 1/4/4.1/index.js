// задача 1
let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// задача 2

function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}

// задача 3

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const запоминает ссылку на объект, поэтому содержимое объекта менять можно
const user = {
  name: 'John',
}

// это будет работать? - будет
user.name = 'Pete'

// задача 4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

let sum = 0
for (let key in salaries) {
  sum += salaries[key]
}

//задача 5

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2
    }
  }
}
