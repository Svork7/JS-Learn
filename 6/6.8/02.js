// задача 2
function sum(a) {
  let currentSum = a

  function f(b) {
    currentSum += b
    return f
  }

  f.toString = function () {
    return currentSum
  }

  return f
}

sum(2)(-3)(-3)
