// задача 1
function checkAge(age) {
  if (age > 18) {
    return true
  } else {
    return confirm('Родители разрешили?')
  }
}

function checkAge(age) {
  if (age > 18) {
    return true
  }
  return confirm('Родители разрешили?')
}

// функции отработают одинаково

// задача 2

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?')
}

//задача 3
function min(a, b) {
  return a < b ? a : b
}

// задача 4

function pow(x, n) {
  let result = x

  for (let i = 1; i < n; i++) {
    result *= x
  }
  return result
}

let x = prompt('введите x:', '')
let n = prompt('введите n:', '')

if (n < 1) {
  alert(`${n} не натуральное число`)
}
alert(pow(x, n))
