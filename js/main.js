const mensagemText = document.querySelector('#caixaTexto');
const wwpImg = document.querySelector('.wpp-container img');

setTimeout(() => wwpImg.style.visibility = 'visible', 2500);
setTimeout(() => mensagemText.style.visibility = 'visible', 3500);

mensagemText.onclick = () => mensagemText.style.visibility = 'hidden';


// Smooth Scroll
const menuItems = document.querySelectorAll('.item-menu');

menuItems.forEach( item => item.addEventListener('click', scrollToIdOnClick));

function scrollToIdOnClick(event){
    event.preventDefault();
    const toSection = getScrollTopByHref(event.target);

    scrollToPosition(toSection);
}

const getScrollTopByHref = element => {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

const scrollToPosition = toSection => {
    window.scroll({
        top: toSection - 85,
        behavior: "smooth",  
    });
}