// задача 1
let i = 3
while (i) {
  alert(i--)
} // 1.  Цикл закончится при i = 0. Но так как запись постфиксная, то последним выведется 1

// задача 2
let i = 0
while (++i < 5) alert(i) // от 1 до 4
let i = 0
while (i++ < 5) alert(i) // от 1 до 5

// Задача 3
for (let i = 0; i < 5; i++) alert(i) // от 0 до 4

for (let i = 0; i < 5; ++i) alert(i) // от 0 до 4

// задача 4
for (let i = 2; i <= 10; i++) {
  i % 2 == 0 ? alert(i) : null
}

// задача 5
let i = 0
while (i < 3) {
  alert(`number ${i}!`)
  i++
}

//задача 6
let number
do {
  number = prompt('Введите число больше 100', 0)
} while (number <= 100 && number)

// задача 7
let num = 10
simple: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue simple
  }
  alert(i)
}
