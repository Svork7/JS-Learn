// задача 1
alert(null || 2 || undefined) // 2

// задача 2
alert(alert(1) || 2 || alert(3)) // 1, затем 2

// Задача 3
alert(1 && null && 2) // null

// задача 4
alert(alert(1) && alert(2)) // 1, undefined

// задача 5
alert(null || (2 && 3) || 4) // 3

//задача 6
//if (age <= 90 && age >= 14)

// задача 7
//if (age > 90 || age < 14)

// задача 8
/*
if (-1 || 0) alert('first') // Выполнится


if (-1 && 0) alert('second') // Не выполнится


if (null || -1 && 1) alert('third') // Выполнится
*/

// задача 9
let userName = prompt('Кто там?', '')

if (userName === 'Админ') {
  let password = prompt('Пароль?', '')

  if (password === 'Я главный') {
    alert('Здравствуйте!')
  } else if (password === '' || password === null) {
    alert('Отменено')
  }
  alert('Неверный пароль')
} else if (userName === '' || userName === null) {
  alert('Отменено')
}
alert('Я вас не знаю')
