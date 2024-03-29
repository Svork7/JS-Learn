// задача 2

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`)
    this.name = 'HttpError'
    this.response = response
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json()
    } else {
      throw new HttpError(response)
    }
  })
}

function demoGithubUser() {
  let name = prompt('Введите логин?', 'iliakan')

  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Полное имя: ${user.name}.`)
      return user
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('Такого пользователя не существует, пожалуйста, повторите ввод.')
        return demoGithubUser()
      } else {
        throw err
      }
    })
}

demoGithubUser()
