addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll('.contador-cantidad');
    const velocidad = 1000;

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {

                let cantidad_maxima = +contador.dataset.cantidadTotal
                let valorActual = +contador.innerText
                let incremento = cantidad_maxima / velocidad

                if (valorActual < cantidad_maxima) {
                    contador.innerText = "+" + Math.ceil(valorActual + incremento)
                    setTimeout(actualizar_contador, 5)
                } else {
                    contador.innerText = "+" + cantidad_maxima
                }


            }

            actualizar_contador()
        }
    }

    const mostrarContadores = elementos => {
        elementos.forEach(element => {
            if (element.isIntersecting) {
                element.target.classList.add('animar')
                element.target.classList.remove('ocultar')
                setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.70 //0 hasta 1
    })

    const elementosHTML = document.querySelectorAll('.show-boxes')
    elementosHTML.forEach(elemento => {
        observer.observe(elemento)
    })
})