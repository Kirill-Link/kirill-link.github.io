

document.querySelector('.navigation__button__books').addEventListener('click', function () {
  const content = document.querySelector('.navigation__content'); // Элемент, который нужно изменить
  content.style.top = '0'; // Сбрасываем top до 0
});

document.querySelector('.chapters__header__link-closed').addEventListener('click', function () {
  const content = document.querySelector('.navigation__content'); // Элемент, который нужно изменить
  content.style.top = '-120%'; // Сбрасываем top до 0
});

// navigation__button__menu


document.querySelector('.navigation__button__menu').addEventListener('click', function () {
  const content_nav = document.querySelector('.page__navigarion__content'); // Элемент, который нужно изменить
  content_nav.style.right = '0'; // Сбрасываем top до 0
});

document.querySelector('.page__navigation__closed').addEventListener('click', function () {
  const content_nav = document.querySelector('.page__navigarion__content'); // Элемент, который нужно изменить
  content_nav.style.right = '-120%'; // Сбрасываем top до 0
});


document.querySelector('.history__btn').addEventListener('click', function () {
  const history_content = document.querySelector('.history__content'); // Элемент, который нужно изменить
  history_content.style.right = '0'; // Сбрасываем top до 0
});


// Получаем кнопку и блок
const history__btn = document.querySelector('.history__btn');
const history_content = document.querySelector('.history__content');

// Флаг для отслеживания состояния
let isMoved = false;

// Добавляем обработчик клика
history__btn.addEventListener('click', () => {
    if (isMoved) {
        // Если блок сдвинут, возвращаем его обратно
        history_content.style.transform = 'translateX(-300px)';
    } else {
        // Если блок не сдвинут, сдвигаем его вправо
        history_content.style.transform = 'translateX(0)';
    }

    // Меняем состояние
    isMoved = !isMoved;
});








// Получаем все ссылки на главы
const chapterLinks = document.querySelectorAll('.chapter__item');

// Создаём функцию для удаления и добавления активного класса
const setActiveChapter = (id) => {
    chapterLinks.forEach((link) => {
        // Сравниваем href каждой ссылки с текущим id
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active'); // Добавляем активный класс
        } else {
            link.classList.remove('active'); // Удаляем активный класс
        }
    });
};

// Используем Intersection Observer для отслеживания видимости блоков
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Устанавливаем активную главу, если блок виден
                setActiveChapter(entry.target.id);
            }
        });
    },
    {
        root: null, // Отслеживаем относительно viewport
        threshold: 0.6, // Блок считается активным, если видимо 60%
    }
);

// Получаем все секции книги и добавляем их в наблюдатель
const bookHeaders = document.querySelectorAll('.books__header');
bookHeaders.forEach((header) => observer.observe(header));



// Находим все ссылки с якорями на странице
const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Получаем ID якоря из href
        const targetId = this.getAttribute('href').substring(1);

        // Находим элемент по этому ID
        const targetElement = document.getElementById(targetId);

        // Если элемент существует и не пустая ссылка
        if (targetElement) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            // Плавная прокрутка к якорю
            targetElement.scrollIntoView({
                behavior: 'smooth', // Плавный переход
                block: 'start' // Скролл до верхнего края элемента
            });
        }
    });
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
  