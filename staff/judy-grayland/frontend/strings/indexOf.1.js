function indexOf(string, searchTerm, index) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === searchTerm) {
      return i
    }
  }
}
