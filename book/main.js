    // Вставляем наш скрипт плавной прокрутки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault(); // Отменяем стандартное поведение ссылки
  
          const targetId = this.getAttribute("href"); // Получаем ID якоря
          const targetElement = document.querySelector(targetId); // Находим элемент по ID
  
          if (targetElement) {
            // Прокручиваем к элементу плавно
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start" // Прокручиваем до начала элемента
            });
          }
        });
      });
      
controll_budrger = document.querySelector('.navigation__controll__burger');

header__navigation = document.querySelector('.header__navigation')
navigation__items = document.querySelector('.navigation__items')
closed_btn = document.querySelector('.navigation__closed')

controll_budrger.addEventListener('click', () => {
    header__navigation.classList.toggle('header__navigation-active');
    navigation__items.classList.toggle('navigation__items-active');
});

closed_btn.addEventListener('click', () => {
    header__navigation.classList.remove('header__navigation-active');
    navigation__items.classList.remove('navigation__items-active');
});

window.addEventListener('scroll', () => {
    header__navigation.classList.remove('header__navigation-active');
    navigation__items.classList.remove('navigation__items-active');
});




  $(document).ready(function() {
    // При клике на первое изображение показываем все остальные
    $('.first').on('click', function() {
      // Убираем класс .hidden, чтобы показать остальные изображения
      $('.hidden').removeClass('hidden');
      
      // Инициализируем FancyBox
      $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        buttons: ["zoom", "slideShow", "fullScreen", "download", "thumbs", "close"],
        caption: function(instance, item) {
          return $(this).data('caption'); // Заголовок из data-caption
        }
      });
    });
  });
  