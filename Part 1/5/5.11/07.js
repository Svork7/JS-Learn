//задача 7
function getSecondsToTomorrow() {
  let now = new Date()
  let hour = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  let secondsToday = (hour * 60 + minutes) * 60 + seconds
  let secondsInDay = 86400

  return secondsInDay - secondsToday
}
