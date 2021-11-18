const boton = document.querySelector("#Boton");
const botones = document.querySelector(".menu-contact");
const contenedor = document.querySelector(".contactanos-contenedor")
const contactImage = document.querySelector('.contact-image');
const menu = document.querySelector("#Menu2");

const footer = document.querySelector('.footer');

let botonStatic = (entry) => {
  

    entry.forEach(element => {

        if (element.isIntersecting) {
            contenedor.classList.add('menu-static')
        } else {
            contenedor.classList.remove('menu-static')
        }

    });

}

const observer = new IntersectionObserver(botonStatic, {

    threshold: 0.25
});

observer.observe(footer);

boton.addEventListener("click", () => {
    botones.classList.toggle('boton-block')
    contactImage.classList.toggle('boton-none')
})


menu.addEventListener("click", () => {
    console.log("Boton presionado")
    botones.classList.toggle('boton-block')
    contactImage.classList.toggle('boton-none')
})