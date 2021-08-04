
let divsHoverAbovePortfolio = document.getElementsByClassName('divAbove');
let divsPortfolio = document.getElementsByClassName('divProyecto');
let linksPaginaHeader = document.getElementsByClassName('linksPagina');

window.addEventListener("orientationchange", recargarPagina);

function recargarPagina(e) {
    window.location.reload(true);
}

if (window.screen.width > 960) {

    for (const div of divsHoverAbovePortfolio) {
    
        div.style.opacity = 0.0;
        div.addEventListener('mouseenter', mostrarLinksProyecto);
        div.addEventListener('mouseleave', ocultarLinksProyecto);

    }

}

if (window.screen.width < 600) {

    for (const link of linksPaginaHeader) {
    
        link.style.display = 'none';

    }

}


document.addEventListener('scroll', ajustarHeader);

function mostrarLinksProyecto(event) {
    event.preventDefault();
    event.target.style.opacity = 1.0;
}

function ocultarLinksProyecto(event) {
    event.preventDefault();
    event.target.style.opacity = 0.0;
}

function ajustarHeader() {

    if (window.screen.width < 600) {
        return;
    }

    let nav = document.getElementById('navTop');
    let top = window.scrollY;
    nav.style.borderRadius = '20px';
    nav.style.borderBottom = 'none';
    if (top < 100 && top >= 60) {
        nav.style.width = `${top}vw`;
    } else if (top >= 100) {
        nav.style.width = '100vw';
        nav.style.borderRadius = '0';
        nav.style.borderBottom = '2px solid #FDFFFC';
    } else {
        nav.style.width = '60vw';
    }
}