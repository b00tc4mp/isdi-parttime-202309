function includes(string, termSearch) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === termSearch) return true
  }
  return false
}
