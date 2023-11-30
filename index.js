const plusSlides = (increment) => {
  //   console.log("are you here bro = ", increment);
  visibleIndex = visibleIndex + increment;
  showSlides(visibleIndex);
};
const currentSlide = (x) => {
  showSlides((visibleIndex = x));
};

const showSlides = (num) => {
  let slides = document.getElementsByClassName("myslides");
  //   console.log(slides);
  let dots = document.getElementsByClassName("dot");
  if (num == slides.length) {
    visibleIndex = 0;
    num = 0;
  }
  if (num < 0) {
    visibleIndex = slides.length - 1;
    num = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    console.log("All are available = ", [i]);
    slides[i].style.display = "none ";
  }
  slides[num].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[visibleIndex - 0].className += " active";
};

let visibleIndex = 0;
showSlides(visibleIndex);
