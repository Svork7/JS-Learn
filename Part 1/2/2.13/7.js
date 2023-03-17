// задача 7
let num = 10
simple: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue simple
  }
  alert(i)
}
