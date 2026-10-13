// statics/js/nav.js
class SiteNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
        <a class="navLogo" href="./" data-goto="home"> Impulso STEAM </a> <!-- ancla para la navegacion, href="#" para autoreferencia, creamos la info personalizada con data- y le llamamos destino con valor home-->

        <!--<button class="nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>-->

        <ul class="navLinks">
            <li><a href="/" data-page="home">Home</a></li>
            <!--<li><a href="#" data-page="portfolio">Sobre nosotros</a></li>
            <li><a href="#" data-page="presentations">Voluntariado</a></li>-->
            <li><a href="./blog/" data-page="publications">Blog</a></li>
            <!--<li><a href="#" data-page="teaching">Contacto</a></li>-->
        </ul>
        <button class="navMenuBtn">☰</button>
    </nav>`;
    }
}
customElements.define('site-nav', SiteNav);