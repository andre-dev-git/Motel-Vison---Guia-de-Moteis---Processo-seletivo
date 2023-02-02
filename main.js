let carouselAux = 1;
function trocarSuite(sentido) {
    const suites = document.querySelectorAll(".suites")
    suites.forEach(element => {
        element.classList.remove("suitesActive")
    });
    const carousel = document.getElementById("carousel")
    let suiteWidth = carousel.children[carouselAux].getBoundingClientRect()
    const quantiSuites = suites.length;
    switch (sentido) {
        case "left":
            carouselAux--;
            break;
        case "right":
            carouselAux++;
            break;
        default:
            break;
    }
    if (carouselAux > 2) {
        carouselAux = 0
    }
    if (carouselAux < 0) {
        carouselAux = 2
    }
    switch (carouselAux) {
        case 0:
            var transform = `translate(${suiteWidth.width + 200}px, 0px)`
            break
        case 1:
            var transform = `translate(0px, 0px)`
            break
        case 2:
            var transform = `translate(-${suiteWidth.width + 200}px, 0px)`
            break
    }
    carousel.children[carouselAux].classList.add("suitesActive")
    carousel.style.transform = transform
}