class MyIframe extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})

    this.iframe = document.createElement("iframe")
    this.iframe.loading = "lazy"
    this.iframe.allowFullscreen = true
    this.iframe.style.width = "100%"
    this.iframe.style.height = "70vh"
    this.iframe.style.border = "none"
    this.iframe.style.marginBottom = "1rem"

    this.shadowRoot.appendChild(this.iframe)
  }

  static get observedAttributes() {
    return ["src"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src" && oldValue !== newValue) {
      this.iframe.src = newValue
    }
  }
}

customElements.define("my-iframe", MyIframe)