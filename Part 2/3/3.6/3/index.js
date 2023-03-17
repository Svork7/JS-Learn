// Задача 3
function isVisible(el) {
  let coords = el.getBoundingClientRect()

  let windowHeight = document.documentElement.clientHeight

  let topVisible = coords.top > 0 && coords.top < windowHeight
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0

  return topVisible || bottomVisible
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src
    if (!realSrc) continue

    if (isVisible(img)) {
      realSrc += '?nocache=' + Math.random()
      img.src = realSrc
      img.dataset.src = ''
    }
  }
}

window.addEventListener('scroll', showVisible)
showVisible()
