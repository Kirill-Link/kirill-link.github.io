

    let navBtn = document.querySelector('.nav__toggle');
    let navBar = document.querySelector('.menu');
    
    navBtn.addEventListener('click', function(){
        navBtn.classList.toggle('nav__toggle-activ');
        navBar.classList.toggle('activ');
    });
    
    let navLink = document.querySelectorAll('.nav__link');
    
    navLink.forEach(function (btn) {
        btn.onclick = function(e) {
            navLink.forEach(function (button) {
                button.classList.remove('nav__link-activ');
            });
            e.target.classList.add('nav__link-activ');
        };
    });
    
    
    const navigation = document.querySelector('.navigation');
    const header = document.querySelector('.header');
    
    const navigationOffset = navigation.offsetHeight;
    const headerOffset = header.offsetHeight;
    
    window.addEventListener('scroll', () => {
        let windowDistance = window.scrollY; 
        if(windowDistance >= navigationOffset){
            navigation.classList.add('navigation-fixed');
            
        } else {
            navigation.classList.remove('navigation-fixed');
        }
    })
$(function() {
    // components for js; //=
    $('a[href^="#"]').click(function () {
    	let _href = $(this).attr('href');
    	$('html, body').animate({scrollTop: $(_href).offset().top + 'px'});
    })
});