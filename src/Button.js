export default class Button {
  constructor(container, text, onClick, parent, className) {
    this.container = container;
    this.text = text;
    this.onClick = onClick;
    this.parent = parent;
    this.className = className;
  }

  render() {
    const button = document.createElement("button");
    button.classList.add(`${this.className}`);
    button.textContent = this.text;
    button.addEventListener("click", this.onClick.bind(this.parent));
    this.container.appendChild(button);
  }

}
