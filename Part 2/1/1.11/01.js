// задача 1
let coords = elem.getBoundingClientRect()
// верхний левый, внешний угол
let corner1 = [coords.left, coords.top]

//нижний правый, внешний угол
let corner2 = [coords.right, coords.bottom]

//верхний левый, внутренний угол
let corner3 = [coords.left + field.clientLeft, coords.top + field.clientTop]

//нижний правый, внутренний угол
let corner4 = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight,
]
