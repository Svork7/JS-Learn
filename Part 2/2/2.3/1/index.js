// Задача  1
container.onclick = (e) => {
  if (e.target.className != 'remove-button') return

  let pane = e.target.closest('.pane')
  pane.remove()
}
