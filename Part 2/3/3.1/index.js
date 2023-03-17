// Задача 1
ul.onclick = (e) => {
  if (e.target.tagName != 'LI') return

  if (e.ctrlKey || e.metaKey) {
    toggleSelect(e.target)
  } else {
    singleSelect(e.target)
  }
}

ul.onmousedown = function () {
  return false
}

function toggleSelect(li) {
  li.classList.toggle('selected')
}

function singleSelect(li) {
  let selected = ul.querySelectorAll('.selected')
  for (let elem of selected) {
    elem.classList.remove('selected')
  }
  li.classList.add('selected')
}
