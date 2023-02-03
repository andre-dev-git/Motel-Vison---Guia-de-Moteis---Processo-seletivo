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
            var transform = `translate(${suiteWidth.width + 140}px, 0px)`
            break
        case 1:
            var transform = `translate(0px, 0px)`
            break
        case 2:
            var transform = `translate(-${suiteWidth.width + 140}px, 0px)`
            break
    }
    carousel.children[carouselAux].classList.add("suitesActive")
    carousel.style.transform = transform
}
function verificarHeader() {
    const body = document.querySelector("body").getBoundingClientRect()
    if (-body.top > (window.innerHeight - 100)) {
        document.getElementById("header-mobile").style.position = "fixed"
        document.getElementById("header-mobile").style.top = "0px"
    } else {
        document.getElementById("header-mobile").style.position = "absolute"
        document.getElementById("header-mobile").style.top = "calc(100vh - 100px)"
    }
    const header = document.querySelector("header")
    header.style.background = `rgb(122, 114, 102, ${(-body.top - 135) / 200})`
    // 
}
function sidebar() {
    document.getElementById("sidebar-mobile").classList.toggle("open")
}