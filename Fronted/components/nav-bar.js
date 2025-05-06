class NavBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    async connectedCallback() {
      const style = await fetch("components/nav-bar.css").then(res => res.text());
  
      this.shadowRoot.innerHTML = `
        <style>${style}</style>
        <nav>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="categories.html">Categorias</a></li>
            <li><a href="about.html">Ejercicios</a></li>
            <li><a href="about.html">Random</a></li>
            <li><a href="about.html">Nivel</a></li>
          </ul>
        </nav>
      `;
    }
  }
  
  customElements.define("nav-bar", NavBar);
  