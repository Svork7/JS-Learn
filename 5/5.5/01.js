// задача 1
let camelize = (str) =>
  str
    .split('-')
    .map((el, i) => (i == 0 ? el : el[0].toUpperCase() + el.slice(1)))
    .join('')
