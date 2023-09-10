$(function() {
    // components for js; //=
});


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

// RUN LINE

function animate(id) {
  var node = document.getElementById(id);
  var text = node.textContent;
  var interval = 60; // Уменьшил интервал для более плавной анимации
  var index = 0;

  function updateText() {
      text = text.substring(1) + text[0];
      node.textContent = text;
  }

  var animationInterval = setInterval(function () {
      if (index < text.length) {
          updateText();
          index++;
      } else {
          index = 0;
          text = node.textContent; // Сброс текста к начальному состоянию
      }
  }, interval);

  // Уменьшим интервал между символами при приближении к концу строки
  var length = text.length;
  setInterval(function () {
      if (index > length * 0.7) {
          clearInterval(animationInterval);
          interval = 40; // Уменьшим интервал для увеличения плавности
          animationInterval = setInterval(function () {
              if (index < text.length) {
                  updateText();
                  index++;
              } else {
                  index = 0;
                  text = node.textContent; // Сброс текста к начальному состоянию
              }
          }, interval);
      }
  }, 100);
}

window.addEventListener('load', function (e) {
  animate('runTxt');
}, false);