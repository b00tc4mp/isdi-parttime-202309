function includes(string, searchTerm) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === searchTerm) return true
  }
  return false
}
