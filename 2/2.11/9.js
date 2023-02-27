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
