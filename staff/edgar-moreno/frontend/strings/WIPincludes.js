function includes(string, termSearch) {
    for (var i = 0; i < termSearch.length; i++) {
      for (var j = 0; j < string.length; j++) {
        if (string[j] === termSearch[i]) return true
      }
    }
    return false
  }