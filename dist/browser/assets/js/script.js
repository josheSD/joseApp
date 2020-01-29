'use strict';

window.onload  = function(){
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';

    let hamburguer = document.getElementById('hamburguer'),
          nav      = document.getElementById('nav'),
          search   = document.getElementById('search');

    if(hamburguer && nav){
        hamburguer.addEventListener('click',()=>{
            nav.classList.toggle('show');
        });
    }

    if(search){
        search.addEventListener('click',()=> {
            search.classList.toggle('show');
        });
    }
};
