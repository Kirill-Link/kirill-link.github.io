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
