// задача 1
let sumSalaries = (salaries) =>
  Object.values(salaries).reduce((a, b) => a + b, 0)

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

alert(sumSalaries(salaries))
