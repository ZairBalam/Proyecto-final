function autoplayCarousel() {
  const carouselEl = document.getElementById("carousel");
  const slideContainerEl = carouselEl.querySelector("#slide-container");
  const slideEl = carouselEl.querySelector(".slide-c");
  let slideWidth = slideEl.offsetWidth;


  document.querySelectorAll(".slide-indicator").forEach((dot, index) => {
    dot.addEventListener("click", () => navigate(index));
    dot.addEventListener("mouseenter", () => clearInterval(autoplay));
  });


  window.addEventListener("resize", () => {
    slideWidth = slideEl.offsetWidth;
  });


  const autoplay = setInterval(() => navigate("forward"), 3000);
  slideContainerEl.addEventListener("mouseenter", () =>
    clearInterval(autoplay)
  );


  const getNewScrollPosition = (arg) => {
    const gap = 10;
    const maxScrollLeft = slideContainerEl.scrollWidth - slideWidth;
    if (arg === "forward") {
      const x = slideContainerEl.scrollLeft + slideWidth + gap;
      return x <= maxScrollLeft ? x : 0;
    } else if (typeof arg === "number") {
      const x = arg * (slideWidth + gap);
      return x;
    }
  };

  const navigate = (arg) => {
    slideContainerEl.scrollLeft = getNewScrollPosition(arg);
  };


  const slideObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideIndex = entry.target.dataset.slideindex;
          
          const currentActive = carouselEl.querySelector(".slide-indicator.active");
          if (currentActive) {
            currentActive.classList.remove("active");
          }
          
          const indicators = carouselEl.querySelectorAll(".slide-indicator");
          if (indicators[slideIndex]) {
            indicators[slideIndex].classList.add("active");
          }
        }
      });
    },
    { root: slideContainerEl, threshold: 0.1 }
  );

  document.querySelectorAll(".slide-c").forEach((slide) => {
    slideObserver.observe(slide);
  });
}

autoplayCarousel();