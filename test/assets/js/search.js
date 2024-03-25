// JavaScript
$(document).ready(function() {
    // Функция для проверки наличия параметра "search" в URL
    function hasSearchParam() {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.has('search');
    }

    // Если нет параметра "search" в URL, выходим из скрипта
    if (!hasSearchParam()) {
        return;
    }

    // Функция для проверки наличия других параметров вместе с параметром "search" в URL
    function hasAdditionalParams() {
        var urlParams = new URLSearchParams(window.location.search);
        urlParams.delete('search'); // Удаляем параметр "search" из списка параметров
        return urlParams.toString() !== '';
    }

    // Функция для скрытия или показа соответствующих блоков в зависимости от наличия других параметров вместе с параметром "search" в URL
    function toggleBlocks() {
        if (!hasAdditionalParams()) {
            // Если нет других параметров кроме "search", скрываем блок с классом "catalog" и показываем блок с классом "no-search-slider"
            $('.cotalog-search').hide();
            $('.no-search-slider').show();
            console.log(hasAdditionalParams());
            console.log(1);
        } else {
            // Если есть другие параметры кроме "search", скрываем блок с классом "no-search-slider" и показываем блок с классом "catalog"
            console.log(hasAdditionalParams());
            $('.no-search-slider').hide();
            $('.cotalog-search').show();
            console.log(2);
        }
    }

    toggleBlocks();

    var pushState = history.pushState;

    history.pushState = function() {
        pushState.apply(this, arguments);
        console.log('url changed');
        toggleBlocks();
    };  
    
});


document.addEventListener("DOMContentLoaded", function() {
    // Функция для проверки наличия параметра в URL
    function hasSearchParam() {
        // Получаем значение параметра "search" из URL
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.has('search');
    }

    // Найдем элементы, которые нужно скрыть и показать
    var elementsToShow = document.querySelectorAll('.show-on-search');
    var elementsToHide = document.querySelectorAll('.hide-on-search');

    // Функция для скрытия элементов
    function hideElements(elements) {
        elements.forEach(function(element) {
            element.style.display = 'none';
        });
    }

    // Функция для показа элементов
    function showElements(elements) {
        elements.forEach(function(element) {
            element.style.display = 'block';
        });
    }

    // Проверяем наличие параметра "search" при загрузке страницы
    if (hasSearchParam()) {
        // Если параметр "search" есть, скрываем элементы, которые нужно скрыть
        hideElements(elementsToHide);
        // Показываем элементы, которые нужно показать
        showElements(elementsToShow);
    } else {
        // Если параметра "search" нет, делаем наоборот
        hideElements(elementsToShow);
        showElements(elementsToHide);
    }
});




document.addEventListener('DOMContentLoaded', function() {
    var closedSearch = document.querySelector('.closed__search');
    var searchInputs = document.getElementsByClassName('facetwp-search');

        // Функция для проверки наличия параметра "search" в URL
        function hasSearchParam() {
            var urlParams = new URLSearchParams(window.location.search);
            return urlParams.has('search');
        }
    
        // Если нет параметра "search" в URL, выходим из скрипта
        if (!hasSearchParam()) {
            return;
        }
    
        // Функция для проверки наличия других параметров вместе с параметром "search" в URL
        function hasAdditionalParams() {
            var urlParams = new URLSearchParams(window.location.search);
            urlParams.delete('search'); // Удаляем параметр "search" из списка параметров
            return urlParams.toString() !== '';
        }
    
        // Функция для скрытия или показа соответствующих блоков в зависимости от наличия других параметров вместе с параметром "search" в URL
        function toggleBlocks() {
            if (!hasAdditionalParams()) {
                // Если нет других параметров кроме "search", скрываем блок с классом "catalog" и показываем блок с классом "no-search-slider"
                $('.cotalog-search').hide();
                $('.no-search-slider').show();
                console.log(hasAdditionalParams());
                console.log(1);
            } else {
                // Если есть другие параметры кроме "search", скрываем блок с классом "no-search-slider" и показываем блок с классом "catalog"
                console.log(hasAdditionalParams());
                $('.no-search-slider').hide();
                $('.cotalog-search').show();
                console.log(2);
            }
        }
    
        

    closedSearch.addEventListener('click', function() {
        // Получаем текущий URL
        var currentUrl = window.location.href;
        // Находим индекс "search" в URL
        var searchIndex = currentUrl.indexOf('search');
        // Если параметр "search" не найден, выходим из функции
        if (searchIndex === -1) {
            return;
        }
        // Обрезаем URL до индекса "search"
        var newUrl = currentUrl.substring(0, searchIndex + 6); // Добавляем длину "search" (6 символов)
        // Обновляем URL
        window.history.replaceState({}, '', newUrl);

        // Очищаем поле ввода
        for (var i = 0; i < searchInputs.length; i++) {
            searchInputs[i].value = '';
            toggleBlocks();
        }
    });
});


