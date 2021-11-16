const boton = document.querySelector("#Boton");
const botones = document.querySelector(".menu-contact");
const contactImage = document.querySelector('.contact-image');
const menu = document.querySelector("#Menu2");

console.log(menu)

boton.addEventListener("click", () => {
    botones.classList.toggle('boton-block')
    contactImage.classList.toggle('boton-none')
})


menu.addEventListener("click", () => {
    console.log("Boton presionado")
    botones.classList.toggle('boton-block')
    contactImage.classList.toggle('boton-none')
})