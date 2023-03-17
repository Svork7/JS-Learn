// задача 5
let menuElem = document.getElementById('sweeties')
let titleElem = menuElem.querySelector('.title')

titleElem.onclick = () => menuElem.classList.toggle('open')
