const btnMobile = document.querySelector('.btn-mobile');

btnMobile.addEventListener('click', mostraMenu);
    
function mostraMenu(){
    const cabecalho = document.querySelector('#cabecalho');
    cabecalho.classList.toggle('active');
}