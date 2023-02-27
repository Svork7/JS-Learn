// задача 2
function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase()

  return lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx')
}
