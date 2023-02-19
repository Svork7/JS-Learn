// задача 1
if ('0') {
  alert('Привет')
}
//ответ: выведется. Не пустая строка это true

// задача 2

let question = prompt('Какое "официальное" название JavaScript?', '')

if (question == 'ECMAScript') {
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}

//  задача 3

let num = prompt('Введите число', 0)

if (num > 0) {
  alert(1)
} else if (num < 0) {
  alert(-1)
} else {
  alert(0)
}

// задача 4

result = a + b < 4 ? 'Мало' : 'Много'

// задача 5

let message =
  login === 'Сотрудник'
    ? 'Привет'
    : login === 'Директор'
    ? 'Здравствуйте'
    : login === ''
    ? 'Нет логина'
    : ''
