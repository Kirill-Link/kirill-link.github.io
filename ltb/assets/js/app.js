

// MENU

const openMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__items')

openMenu.addEventListener('click', (event) => {
  menu.classList.toggle('menu__items-open')
})

window.addEventListener('scroll', () => {
  menu.classList.remove('menu__items-open')
})
// ACCARDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
function animate(id) {
    var node = document.getElementById(id);
    var text = node.textContent;
    var index = 0;
    var interval = 60;
    var animationStartTime = null;

    function updateText(timestamp) {
        if (!animationStartTime) animationStartTime = timestamp;
        var progress = timestamp - animationStartTime;
        if (progress > interval) {
            text = text.substring(1) + text[0];
            node.textContent = text;
            node.style.opacity = 1; // Плавное появление текста
            animationStartTime = timestamp;
            index++;
        }

        if (index < text.length) {
            requestAnimationFrame(updateText);
        } else {
            index = 0;
            text = node.textContent;
            requestAnimationFrame(updateText);
        }
    }

    requestAnimationFrame(updateText);
}

window.addEventListener('load', function (e) {
    animate('runTxt');
}, false);
var swiper = new Swiper(".products-swipe", {
  direction: "vertical",
  mousewheel: true,
  loop: true,
  // spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});


var swiper2 = new Swiper(".first__product-swipe", {
  direction: "vertical",
  mousewheel: true,
  loop: true,
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});

// Fancybox.bind('[data-fancybox="gallery"]', {
//   // Your custom options
// });

function activeFilletre () {
  const filtreBtn = document.querySelector('.filltre__btn'); 
  filtreBtn.addEventListener('click', () => {
    let filltreBody = document.querySelector('.filltre__body');
    let filltreCatalog = document.querySelector('.catalog__filltre');
    let catalogSort = document.querySelector('.catalog__sort');

    filltreBody.classList.toggle('filltre__body-active');
    filltreCatalog.classList.toggle('catalog__filltre-active')
    catalogSort.classList.toggle('catalog__sort-deactive')
  


  })
}
activeFilletre();


function activeSort () {
  const filtreBtn = document.querySelector('.sort__btn'); 
  filtreBtn.addEventListener('click', () => {
    let sortBody = document.querySelector('.sort__body');
    let sortCatalog = document.querySelector('.catalog__sort');
    let catalogFilltre = document.querySelector('.catalog__filltre');

    sortBody.classList.toggle('sort__body-active');
    sortCatalog.classList.toggle('catalog__sort-active')
    catalogFilltre.classList.toggle('catalog__filltre-deactive')
  


  })
}
// activeSort();