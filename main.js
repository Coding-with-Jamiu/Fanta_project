// custom header starts here

class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ''
    }
}

customElements.define('my-header', myHeader);

// custom header ends here

// custom footer starts here

class myFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = ''
        
    }
}

customElements.define('my-footer', myFooter);

// custom footer ends here

// login form hide and show... display: none; has been defined in CSS...
const userIcon = document.querySelector("#userIcon");
userIcon.addEventListener("click", () => {
    login_container.style.display="block"
})



const close = document.querySelector("#close");
close.addEventListener("click", () => {
    login_container.style.display="none"
})