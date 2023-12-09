class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Post {
  constructor(id, author, image, text, likes) {
    this.id = id;
    this.author = author;
    this.image = image;
    this.text = text;
    this.likes = likes;
  }
}

class CreditCard {
  constructor(id, user, fullName, number, expirationDate) {
    (this.id = id),
      (this.user = user),
      (this.fullName = fullName),
      (this.number = number),
      (this.expirationDate = expirationDate);
  }
}
