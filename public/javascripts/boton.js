const bntMenu = document.querySelector('#menu')
const menuContent = document.querySelector('.menu-content')

let position = 0


position = window.screenY
console.log(position)



addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector('.footer');

    let botonStatic = (entry) => {
        console.log(entry)

        entry.forEach(element => {

            if (element.isIntersecting) {
                menuContent.classList.add('menu-static')
            } else {
                menuContent.classList.remove('menu-static')
            }

        });

    }

    const observer = new IntersectionObserver(botonStatic, {

        threshold: 0.25
    });

    observer.observe(footer);

})

bntMenu.addEventListener('click', () => {
    menuContent.classList.toggle('menu-active');
})