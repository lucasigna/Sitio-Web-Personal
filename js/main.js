$(document).ready(function() {

    let divsHoverAbovePortfolio = $('.divAbove');
    let linksPaginaHeader = $('.linksPagina');
    let divSobreMi = $('#divSobreMi');
    let divEducacion = $('#divEducacion');
    let divPortfolio = $('#divPortfolio');
    let divContacto = $('#divContacto');
    let btnCV = $('#btnCV');
    let body = $('body');
    let divColorAboveBody = $('.divColorAboveBody');
    let h1SobreMi = $('#h1SobreMi');
    let h2Educacion = $('#h2Educacion');
    let h2Portfolio = $('#h2Portfolio');
    let h2Contacto = $('#h2Contacto');
    let nav = $('#navTop');
    let navMobile = $('#navTopMobile');
    let ulMobile = $('#ulMobile');
    let btnMenu = $('.imgIconMenu');

    ulMobile.hide();
    
    btnMenu.click(function() {
        ulMobile.toggle('fast');
    });

    document.addEventListener('scroll', ajustarHeader);

    function ajustarHeader() {

        let top = window.scrollY;
        if (window.screen.width >= 600) {
            nav.css({'border-radius':'20px'});   
        }
        nav.css({'border-bottom':'none'});
        divSobreMi.css({'border':'none'});
        divEducacion.css({'border':'none'});
        divPortfolio.css({'border':'none'});
        divContacto.css({'border':'none'});
        btnCV.css({'border':'none'});
        divColorAboveBody.css({'opacity':'1.0'});
        divColorAboveBody.css({'background-color':'#E09F3E'});
        h1SobreMi.css({'color':'#191919'});
        h2Educacion.css({'color':'#191919'});
        h2Portfolio.css({'color':'#191919'});
        h2Contacto.css({'color':'#191919'});
        navMobile.css({'border-bottom':'none'});
        if (top < 100 && top >= 60) {
            divColorAboveBody.css({'opacity':`${1-(top/100)}`});
            if (window.screen.width < 600) {
                return;
            }
            nav.css({'width':`${top}vw`});
        } else if (top >= 100) {
            // El usuario bajo mas de 100px
            divSobreMi.css({'border-top':'1px solid #FDFFFC','border-left':'1px solid #FDFFFC','border-bottom':'1px solid #FDFFFC'});
            divEducacion.css({'border-top':'1px solid #FDFFFC','border-right':'1px solid #FDFFFC','border-bottom':'1px solid #FDFFFC'});
            divPortfolio.css({'border-top':'1px solid #FDFFFC','border-left':'1px solid #FDFFFC','border-bottom':'1px solid #FDFFFC'});
            divContacto.css({'border-top':'1px solid #FDFFFC','border-right':'1px solid #FDFFFC','border-bottom':'1px solid #FDFFFC'});
            btnCV.css({'border':'1px solid #FDFFFC'});
            divColorAboveBody.css({'opacity':'0.5'});
            divColorAboveBody.css({'background-color':'#191919'});
            h1SobreMi.css({'color':'#FDFFFC'});
            h2Educacion.css({'color':'#FDFFFC'});
            h2Portfolio.css({'color':'#FDFFFC'});
            h2Contacto.css({'color':'#FDFFFC'});
            navMobile.css({'border-bottom':'2px solid #FDFFFC'});
            if (window.screen.width < 600) {
                return;
            }
            nav.css({'width':'100vw'});
            nav.css({'border-radius':'0'});
            nav.css({'border-bottom':'2px solid #FDFFFC'});
            
        } else {
            if (window.screen.width < 600) {
                return;
            }
            nav.css({'width':'60vw'});
        }
    }

});