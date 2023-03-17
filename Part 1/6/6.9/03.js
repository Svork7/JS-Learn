// Задача 3
function debounce(f, ms) {
  let pause = false

  return function () {
    if (pause) return

    f.apply(this, arguments)

    pause = true

    setTimeout(() => (pause = false), ms)
  }
}
