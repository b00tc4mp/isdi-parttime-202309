function indexOf(string, searchTerm) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === searchTerm) {
        return i
      }
      // if (!string.includes(searchTerm)) {
      //   return -1
      // }
    }
    return -1
  }