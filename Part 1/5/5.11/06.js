//задача 6
function getSecondsToday() {
  let differenceInSecs = new Date()
  return (
    differenceInSecs.getHours() * 3600 +
    differenceInSecs.getMinutes() * 60 +
    differenceInSecs.getSeconds()
  )
}
