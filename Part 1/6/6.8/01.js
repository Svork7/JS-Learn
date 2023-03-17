// задача 1
// через setInterval

function printNumbers(from, to) {
  let cur = from

  let id = setInterval(function () {
    alert(cur)
    if (cur === to) {
      clearInterval(id)
    }
    cur++
  }, 1000)
}

// через рекурсивный setTimeout

function printNumbers(from, to) {
  let cur = from

  setTimeout(function timer() {
    alert(cur)
    if (cur < to) {
      setTimeout(timer, 1000)
    }
    cur++
  }, 1000)
}
