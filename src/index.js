module.exports = function reverse (n) {
  n = n.toString().split('')
  let sign = ''
  if (n[0] === '-') sign = n.shift()
  n = n.reverse().join('')
  return  n
}
