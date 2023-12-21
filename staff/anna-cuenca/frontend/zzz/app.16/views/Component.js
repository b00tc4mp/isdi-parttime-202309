class Component {
  constructor(container) {
    this.container = container;
  }

  show() {
    this.container.style.display = "";
  }

  hide() {
    this.container.style.display = "none";
  }
}

// Esta es la clase que contiene a todas las demás. Como métodos comunes tiene
// show y hide
