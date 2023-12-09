class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Post {
  constructor(author, image, text, likes, deleteBut) {
    this.author = author;
    this.image = image;
    this.text = text;
    this.likes = likes;
    this.deleteBut = deleteBut;
  }

  deleteButton() {
    this.container.style.display = "";
  }
}
