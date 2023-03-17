// Задача 2

arrowTop.onclick = () => window.scrollTo(scrollX, 0)

window.addEventListener(
  'scroll',
  () => (arrowTop.hidden = scrollY < document.documentElement.clientHeight)
)
