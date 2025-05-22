var swiper = new Swiper(".header__slider", {
    pagination: {
      el: ".header__slider-pagination",
    },
  });
  

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const parallaxContainer = document.querySelector('.main__paralax');
  const parallaxImage = document.querySelector('.main__parallax-image');
  const containerOffsetTop = parallaxContainer.offsetTop;
  const containerHeight = parallaxContainer.offsetHeight;

  if (scrollY >= containerOffsetTop && scrollY <= containerOffsetTop + containerHeight) {
    const parallaxSpeed = 0.5;
    const offset = (scrollY - containerOffsetTop) * parallaxSpeed;
    parallaxImage.style.transform = `translateY(${offset}px)`;
  }
});


document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".mobile__burger__menu");
    const menu = document.querySelector(".menu");
    const navigation = document.querySelector(".navigation");
    let scrollPosition = 0;
  
    burger.addEventListener("click", function (e) {
      e.preventDefault();
      
      menu.classList.toggle("menu-active");
      navigation.classList.toggle("navigation-active");
      burger.classList.toggle("active");
  
      if (menu.classList.contains("menu-active")) {
        scrollPosition = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = "100%";
      } else {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition);
      }
    });
  });
  
  
  
    function openModal() {
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        document.body.classList.remove("modal-open");
    }