class Curry {
  constructor(...args) {
    if (args.length === 1)
      if (Number.isInteger(args[0]) && args[0] >= 0) {
        this.length = args[0]

        return
      } else if (
        (Number.isInteger(args[0]) && args[0] < 0) ||
        (typeof args[0] === 'number' && !Number.isInteger(args[0]))
      ) {
        throw new RangeError('Invalid Curry length')
      }
    for (let i = 0; i < args.length; i++) {
      let argument = args[i]

      this[i] = argument
    }
    this.length = args.length
  }

  at(index) {
    if (index < 0) {
      index = this.length + index
    }
    return this[index]
  }

  filter(callback) {
    const result = new Curry()
    for (let i = 0; i < this.length; i++) {
      const element = this[i]
  
      if (callback(element)) {
        result[result.length] = element
        result.length++
      }
    }
    return result
  }
  
  find(callback) {
    for (let i = 0; i < this.length; i++) {
      const element = this[i]
  
      if (callback(element)) {
        return element
      }
    }
  }
  
forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      var v = this[i]
  
      callback(v)
    }
  }
  
indexOf(searchTerm) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchTerm) return i
  }
  return -1
}

join(separator) {
  let newString = ''
  if (separator === undefined) {
    separator = ','
  }
  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      newString += this[i]
      return newString
    }
    newString += this[i] + separator
  }
  return newString
}

pop() {
  if (this.length === 0) return

  let lastElement = this[this.length - 1]
  delete this[this.length - 1]
  this.length--

  return lastElement
}

push(item) {
  if (arguments.length) {
    this[this.length] = item
    this.length++

    if (arguments.length > 1) {
      for (let i = 1; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
      }
    }
  }
  return this.length
}

reverse() {
  for (let i = 0; i < this.length / 2; i++) {
    let forwardElement = this[i]
    let backwardElement = this[this.length - 1 - i]
    this[this.length - 1 - i] = forwardElement
    this[i] = backwardElement
  }
  return this
}

}
