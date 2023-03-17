// задача 1
let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
]

let riddenMessages = new WeakSet()

riddenMessages.add(messages[0])
riddenMessages.add(messages[1])

alert('Read message 0: ' + riddenMessages.has(messages[0]))

messages.shift()
