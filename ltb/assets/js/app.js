
$('#menu-toggle').click(function(){
  $(this).toggleClass('open');
})


// MENU

const openMenu = document.querySelector('#menu-toggle');
const menu = document.querySelector('.menu__items')

openMenu.addEventListener('click', (event) => {
  menu.classList.toggle('menu__items-open')
})

window.addEventListener('scroll', () => {
  menu.classList.remove('menu__items-open')
})
var X = 0;
var Y = 0;
var mouse = { x: 0,y: 0 };

window.addEventListener("mousemove", function(event) {
                            // смещение в центр
  mouse.x = event.clientX - circle.offsetWidth / 2;
  mouse.y = event.clientY - circle.offsetHeight / 2;
});

function move() {
  X += (mouse.x - X) * 0.1;
  Y += (mouse.y - Y) * 0.1;
  circle.style.transform = `matrix(1, 0, 0, 1, ${X}, ${Y})`;
  requestAnimationFrame(move);
}

move();
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
document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.text');
    const containerWidth = document.querySelector('.run_container').offsetWidth;

    function animateText(text) {
        gsap.to(text, {
            x: -containerWidth,
            duration: 40,
            ease: "linear",
            repeat: -1,
            onStart: () => {
                text.style.transform = "translateX(" + containerWidth + "px)";
            }
        });
    }

    texts.forEach(text => {
        animateText(text);
    });
});
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
var swiper = new Swiper(".page-menu", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      390: {
          slidesPerView: 2, 
      },
  
      455: {
          slidesPerView: 3,
  
      },
  
      650: {
          slidesPerView: 3,
      },
      // Первый диапазон: от 0 до 767 пикселей
      767: {
          slidesPerView: 4, // Отображать по 1 слайду
      },
      // Второй диапазон: от 768 до 991 пикселей
      991: {
          slidesPerView: 4, // Отображать по 2 слайда
      },
      // Третий диапазон: от 992 до 1199 пикселей
      1199: {
          slidesPerView: 4, // Отображать по 3 слайда
      },
      // Четвертый диапазон: от 1200 и выше
      1200: {
          slidesPerView: 4, // Отображать по 4 слайда
      }
  }

  });


var swiper = new Swiper(".catalog__menus", {
    slidesPerView: 4,
    spaceBetween: 30,
  });
var swiper = new Swiper(".search__swipe", {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    390: {
        slidesPerView: 1, 
    },

    455: {
        slidesPerView: 2,

    },

    650: {
        slidesPerView: 3,
    },
    // Первый диапазон: от 0 до 767 пикселей
    767: {
        slidesPerView: 4, // Отображать по 1 слайду
    },
    // Второй диапазон: от 768 до 991 пикселей
    991: {
        slidesPerView: 4, // Отображать по 2 слайда
    },
    // Третий диапазон: от 992 до 1199 пикселей
    1199: {
        slidesPerView: 4, // Отображать по 3 слайда
    },
    // Четвертый диапазон: от 1200 и выше
    1200: {
        slidesPerView: 5, // Отображать по 4 слайда
    }
}
});
(function() {
    const buttons = document.querySelectorAll(".btn-posnawr");
  
    buttons.forEach(button => {
      ["mouseenter", "mouseout"].forEach(evt => {
        button.addEventListener(evt, e => {
          let parentOffset = button.getBoundingClientRect(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
  
          const span = button.getElementsByTagName("span");
  
          span[0].style.top = relY + "px";
          span[0].style.left = relX + "px";
        });
      });
    });
  })();
  
  // originally forked from https://codepen.io/kkick/pen/oWZMov

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
activeSort();