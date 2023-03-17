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
