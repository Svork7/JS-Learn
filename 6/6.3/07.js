//задача 7
function makeArmy() {
  let shooters = []

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      alert(i)
    }
    shooters.push(shooter)
  }

  return shooters
}
