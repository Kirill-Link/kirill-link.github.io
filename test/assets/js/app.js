$(document).ready(function() {
  $(function() {
    $('.text').marquee({
      duration: 48000,
      startVisible: true,
      duplicated: true
    });
  });
});


// MENU


const navBurger = document.querySelector('.nav__burger')
const openMenu = document.querySelector('#menu-toggle');
const menu = document.querySelector('.navigation')

openMenu.addEventListener('click', (event) => {
  menu.classList.toggle('navigation-open')
  openMenu.classList.toggle('open')
  navBurger.classList.toggle('nav__burger-active')
})

const liElementsWithSubMenu = document.querySelectorAll('.menu > li');

liElementsWithSubMenu.forEach(liElement => {
  if (liElement.querySelector('ul')) {
    liElement.classList.add('submenu-dropdown');
  }
});

const dropdownMenus = document.querySelectorAll('.submenu-dropdown');
const socialposition = document.querySelector('.navigaton__socials');

document.addEventListener('click', (event) => {
  // Закрываем все открытые подменю при клике за пределами меню
  if (!event.target.closest('.menu')) {
    dropdownMenus.forEach((dropdownMenu) => {
      dropdownMenu.classList.remove('submenu-dropdown-open');
      dropdownMenu.querySelector('ul').classList.remove('submenu-dropdown-open');
    });
  }
});

dropdownMenus.forEach((dropdownMenu) => {
  const dropdownMenuItem = dropdownMenu.querySelector('ul');

  dropdownMenu.addEventListener('click', (event) => {
    // Закрываем все открытые подменю при клике на другой пункт
    dropdownMenus.forEach((otherDropdownMenu) => {
      if (otherDropdownMenu !== dropdownMenu) {
        otherDropdownMenu.classList.remove('submenu-dropdown-open');
        otherDropdownMenu.querySelector('ul').classList.remove('submenu-dropdown-open');
      }
    });

    // Переключаем классы текущего подменю
    dropdownMenu.classList.toggle('submenu-dropdown-open');
    dropdownMenuItem.classList.toggle('submenu-dropdown-open');
  });
});


var X = 0;
var Y = 0;
var mouse = { x: 0, y: 0 };
var circle = document.getElementById('circle');

window.addEventListener("mousemove", function(event) {
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

// Добавляем обработчики для изменения цвета при наведении на секции
var sections = document.querySelectorAll('.footer');

sections.forEach(function(section) {
  section.addEventListener('mouseenter', function() {
    circle.style.backgroundColor = '#000000'; // Измените цвет по вашему усмотрению
    circle.style.borderColor = '#000000'; // Измените цвет по вашему усмотрению
  });

  section.addEventListener('mouseleave', function() {
    circle.style.backgroundColor = '#BFBFBF'; // Возвращаем начальный цвет
    circle.style.borderColor = '#BFBFBF'; // Измените цвет по вашему усмотрению

  });
});

// ACCARDION

// function accardion() {
//   var acc = document.getElementsByClassName("accordion");
//   var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
// }

// accardion()
// document.addEventListener("DOMContentLoaded", function() {
//     const texts = document.querySelectorAll('.text');
//     const containerWidth = document.querySelector('.run_container').offsetWidth;

//     function animateText(text) {
//         gsap.to(text, {
//             x: -containerWidth, // Используем x вместо left
//             duration: 50,
//             ease: "linear",
//             repeat: -1,
//             onStart: () => {
//                 text.style.x = containerWidth + "px"; // Используем style.x для начальной позиции
//             }
//         });
//     }

//     texts.forEach(text => {
//         animateText(text);
//     });
// });


var swiper = new Swiper(".products-swipe", {
  direction: "vertical",
  // mousewheel: true,
  loop: true,
  // spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});


var swiper2 = new Swiper(".first__product-swipe", {
  direction: "vertical",
  // mousewheel: true,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },

  thumbs: {
    swiper: swiper,
  },
  breakpoints: {
    320: {
      direction: "horizontal",
    },
    867: {
      direction: "vertical",
    },
  },
});
function pagesSlider() {
  var swiper = new Swiper(".page-menu", {
    slidesPerView: 'auto',
    spaceBetween: 170,
    breakpoints: {
      0: {
        spaceBetween:15,
      },
      390: {
        spaceBetween:30,
      },
  
      455: {
        spaceBetween:30,
  
      },
  
      650: {
        spaceBetween: 50,
      },
      // Первый диапазон: от 0 до 767 пикселей
      767: {

      },
      // Второй диапазон: от 768 до 991 пикселей
      991: {
        spaceBetween: 70,
      },
      // Третий диапазон: от 992 до 1199 пикселей
      1199: {
        spaceBetween: 170,
      },
  }

  });


    document.addEventListener('facetwp-loaded', function() {
        var swiper = new Swiper(".catalog__menus", {
              slidesPerView: 'auto',
              spaceBetween: 80,
              breakpoints: {
                0: {
                  spaceBetween:15,
                },

                390: {
                  spaceBetween:30,
                },
            
                455: {
                  spaceBetween:30,
            
                },
            
                650: {
                  spaceBetween: 50,
                },
                // Первый диапазон: от 0 до 767 пикселей
                767: {

                },
                // Второй диапазон: от 768 до 991 пикселей
                991: {
                  spaceBetween: 70,
                },
                // Третий диапазон: от 992 до 1199 пикселей
                1199: {
                  spaceBetween: 80,
                },
            }
        });
    });
}

pagesSlider()

var swiper = new Swiper(".search__swipe", {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    390: {
        slidesPerView: 1, 
    },

    455: {
        slidesPerView: 2,

    },

    650: {
        slidesPerView: 2,
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
var numCounts = document.querySelectorAll('.num_count');
var plusBtns = document.querySelectorAll('.button_plus');
var minusBtns = document.querySelectorAll('.button_minus');

function updateQuantity(input, amount) {
    var qty = parseInt(input.value) + amount;
    qty = Math.max(1, Math.min(10, qty)); // Ensure the quantity stays between 1 and 10
    input.value = qty;
}

plusBtns.forEach(function(plusBtn, index) {
    plusBtn.onclick = function() {
        updateQuantity(numCounts[index], 1);
    };
});

minusBtns.forEach(function(minusBtn, index) {
    minusBtn.onclick = function() {
        updateQuantity(numCounts[index], -1);
    };
});

function activeFilletre () {
  const filtreBtn = document.querySelector('.filltre__btn'); 
  filtreBtn.addEventListener('click', () => {


    let CatalogItemFilter = document.querySelector('.catalog__item-filltre')
    let filltreBody = document.querySelector('.filltre__body');
    let filltreCatalog = document.querySelector('.catalog__filltre');
    let catalogSort = document.querySelector('.catalog__sort');

    filltreBody.classList.toggle('filltre__body-active');
    filltreCatalog.classList.toggle('catalog__filltre-active')
    catalogSort.classList.toggle('catalog__sort-deactive')
    filtreBtn.classList.toggle('filltre__btn-open')
    CatalogItemFilter.classList.toggle('catalog__item-filltre-open')
  


  })
}
activeFilletre();

let filtreBtns = document.querySelectorAll('.filltre__button');

filtreBtns.forEach((btn) => {
  btn.addEventListener('click', () => {

    const filtreBtn = document.querySelector('.filltre__btn'); 
    filtreBtn.classList.toggle('filltre__btn-open')

    let CatalogItemFilter = document.querySelector('.catalog__item-filltre');
    let filltreBody = document.querySelector('.filltre__body');
    let filltreCatalog = document.querySelector('.catalog__filltre');
    let catalogSort = document.querySelector('.catalog__sort');

    filltreBody.classList.toggle('filltre__body-active');
    filltreCatalog.classList.toggle('catalog__filltre-active');
    catalogSort.classList.toggle('catalog__sort-deactive');
    btn.classList.toggle('filltre__btn-open');
    CatalogItemFilter.classList.toggle('catalog__item-filltre-open');
  });
});

let filtreClosedBtn = document.querySelector('.filltre__btn-closed');

filtreClosedBtn.addEventListener('click', () => {


  const filtreBtn = document.querySelector('.filltre__btn'); 
  filtreBtn.classList.toggle('filltre__btn-open')


  let CatalogItemFilter = document.querySelector('.catalog__item-filltre');
  let filltreBody = document.querySelector('.filltre__body');
  let filltreCatalog = document.querySelector('.catalog__filltre');
  let catalogSort = document.querySelector('.catalog__sort');

  filltreBody.classList.toggle('filltre__body-active');
  filltreCatalog.classList.toggle('catalog__filltre-active');
  catalogSort.classList.toggle('catalog__sort-deactive');
  CatalogItemFilter.classList.toggle('catalog__item-filltre-open');
});



function activeSort () {
  const filtreBtn = document.querySelector('.sort__btn'); 
  filtreBtn.addEventListener('click', () => {

    let SortOpen = document.querySelector('.catalog__item-sort')
    let sortBody = document.querySelector('.sort__body');
    let sortCatalog = document.querySelector('.catalog__sort');
    let catalogFilltre = document.querySelector('.catalog__filltre');

    SortOpen.classList.toggle('catalog__item-sort-open')
    sortBody.classList.toggle('sort__body-active');
    sortCatalog.classList.toggle('catalog__sort-active')
    catalogFilltre.classList.toggle('catalog__filltre-deactive')
  


  })
}
activeSort();


function toggleCustomRadioStyle(element) {
  // Удаляем класс 'active' у всех элементов
  var allElements = document.querySelectorAll('.slect__way');
  allElements.forEach(function (el) {
      el.classList.remove('active22');
  });

  // Добавляем класс 'active' к элементу, на который был клик
  element.classList.add('active22');
}


function toggleCustomRadioStyleWaist(element) {
  // Удаляем класс 'active' у всех элементов
  var allElements = document.querySelectorAll('.select_wais__size');
  
  allElements.forEach(function (el) {
      el.classList.remove('waist-active');
  });
  
  // Добавляем класс 'active' к элементу, на который был клик
  element.closest('.select_wais__size').classList.add('waist-active');
}


function toggleCustomRadioStyleLength(element) {
  // Удаляем класс 'active' у всех элементов
  var allElements = document.querySelectorAll('.select_length__size');
  
  allElements.forEach(function (el) {
      el.classList.remove('length-active');
  });
  
  // Добавляем класс 'active' к элементу, на который был клик
  element.closest('.select_length__size').classList.add('length-active');
}



function toggleSelectSize(element) {
  // Удаляем класс 'active' у всех элементов
  var allElements = document.querySelectorAll('.select__size');
  allElements.forEach(function (el) {
      el.classList.remove('select__size-active');
  });

  // Добавляем класс 'active' к элементу, на который был клик
  element.classList.add('select__size-active');
}


function toggleSection(sectionNumber) {
  var sections = document.querySelectorAll('.accordion-inner .desc__item_panel');
  var currentSection = sections[sectionNumber - 1];

  sections.forEach(function(section) {
    if (section !== currentSection) {
      section.style.maxHeight = null;
    }
  });

  if (currentSection.style.maxHeight) {
    currentSection.style.maxHeight = null;
  } else {
    currentSection.style.maxHeight = currentSection.scrollHeight + 'px';
  }
}

function redirectToPage(url) {
  window.location.href = url;
}

function copyLink(link) {
  var notification = document.getElementById('notification');
  navigator.clipboard.writeText(link).then(function() {
    notification.innerHTML = 'Ссылка скопирована!';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.display = 'block';
    setTimeout(function() {
      notification.style.display = 'none';
    }, 3000);
  }).catch(function(err) {
    console.error('Ошибка копирования: ', err);
  });
}




function incrementQuantity(button) {
  var quantityInput = button.nextElementSibling;
  if (quantityInput) {
      var cartKey = quantityInput.dataset.cartKey;
      var newQuantity = parseInt(quantityInput.value) + 1;

      updateCartItemQuantity(cartKey, newQuantity);
  }
}

function decrementQuantity(button) {
  var quantityInput = button.previousElementSibling;
  if (quantityInput) {
      var cartKey = quantityInput.dataset.cartKey;
      var newQuantity = parseInt(quantityInput.value) - 1;

      if (newQuantity >= 1) {
          updateCartItemQuantity(cartKey, newQuantity);
      }
  }
}


function updateCartItemQuantity(cartKey, newQuantity) {
var data = {
    action: 'update_cart_item_quantity',
    cart_key: cartKey,
    quantity: newQuantity
};

console.log('Отправляемые данные:', data); // Выводим отправляемые данные в консоль

jQuery.post(ajax_object.ajax_url, data, function(response) {
    // Обработка ответа
    var jsonResponse = JSON.parse(response);
    if (jsonResponse.success) {
        // Обновление отображения количества товаров в корзине
        var cartCountElement = document.querySelector('.product__quantity');
        if (cartCountElement) {
            cartCountElement.textContent = jsonResponse.cart_count;
        }
    }
});
}