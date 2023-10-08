function lastIndexOf(string, searchTerm) {
    for (let i = string.length - 1; i >= 0; i--) {
      if (string[i] === searchTerm) {
        return i
      }
    }
    return -1
  }