// задача 1
// Когда браузер считывает атрибут onclick, он создаёт функцию-обработчик с содержимым этого атрибута в качестве тела функции.

function handler() {
  alert('...')
  return false
}

// так нужно задать тег в html
//<a href="https://w3.org" onclick="return handler()">w3.org</a>
