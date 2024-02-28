/* close and open btn menu ---*/
const navBtn = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');


navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
});

/* end ---*/



/* وقتی روی هر دکمه از منو کلیک شد باعث بسته شدن پنجره میشود */
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
      // prevent default
      e.preventDefault();
      navLinks.classList.remove("show-links");

      const id = e.target.getAttribute("href").slice(1);
      const element = document.getElementById(id);

      let position = element.offsetTop - 62;

      window.scrollTo({
          left: 0,
          top: position,
          behavior: "smooth"
      });
  });
});
/* end ---*/



/* scroll header ---*/
const header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('sticky', window.scrollY > 0);
});
/* end ---*/


/* scroll reveall ---*/
const sr = ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200,
  });

    
ScrollReveal().reveal('.home-text, .service-center, .portfolio-center, .heading ', { origin: 'top' });
ScrollReveal().reveal('.about-image', { origin: 'left' });
ScrollReveal().reveal('.about-text , .service-container', { origin: 'right' });
ScrollReveal().reveal('.service-container, .portfolio-container, .testimonial-box, form, .home-image img', { origin: 'bottom' });
/* end scroll reveall ---*/


/* Swiper ---*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grapCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/* End Swiper ---*/


/* Dark Light ---*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}

