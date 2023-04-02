// задача 1

function pseudoRandom(seed) {
  let value = seed

  return function () {
    value = (value * 16807) % 2147483647
    return value
  }
}
