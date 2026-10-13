// statics/js/footer.js
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <span>© <span id="year"></span> Impulso STEM</span>

                <span> Desarrollador : <a href="https://urriisa.github.io/" target="_blank" rel="noopener noreferrer"> <i>Urri</i> </a> </span>
            </footer>`;
    }
}
customElements.define('site-footer', SiteFooter);
