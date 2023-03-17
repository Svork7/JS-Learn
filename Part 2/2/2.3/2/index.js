// Задача  2
for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span')
  li.prepend(span)
  span.append(span.nextSibling)
}

tree.onclick = (e) => {
  if (e.target.tagName != 'SPAN') {
    return
  }

  let childrenContainer = e.target.parentNode.querySelector('ul')
  if (!childrenContainer) return

  childrenContainer.hidden = !childrenContainer.hidden
}
