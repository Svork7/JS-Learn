// задача 4
// в приведенном примере stomach находится в прототипе hamster.
// чтобы были отдельные желудки необходимо присвоить свой "желудок" и быстрому, и ленивому хомяку
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food)
  },
}

let speedy = {
  __proto__: hamster,
  stomach: [],
}

let lazy = {
  __proto__: hamster,
  stomach: [],
}
