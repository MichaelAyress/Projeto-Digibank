$(document).ready(() => { 

$("i").click(function () {
    $("ul").toggleClass("open");
  });
  //cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js

$("#menu-servico").click(function () {
  $(".menu-2").toggleClass("menu-2-open");
})

/*$(".cards").hover(
  e => $(e.target).toggleClass("img-vibrate")
)*/

$(".vibrate").hover(function () {
  $(".img-card").toggleClass("img-vibrate")
})

$(".vibrate1").hover(function () {
  $(".img-card1").toggleClass("img-vibrate")
})

$(".vibrate2").hover(function () {
  $(".img-card2").toggleClass("img-vibrate")
})

$(".vibrate3").hover(function () {
  $(".img-card3").toggleClass("img-vibrate")
})

})


// Animate

// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-title]');
const targetTwo = document.querySelectorAll('[data-p]');
const animationTextClass = 'animateText';
const animationParagrafoClass = 'animateP'


function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationTextClass);
    } 
  })
  targetTwo.forEach(function(elementp) {
    if((windowTop) > elementp.offsetTop) {
      elementp.classList.add(animationParagrafoClass);
    } 
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}