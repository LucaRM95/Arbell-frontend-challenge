const images = [
  {
    desktop: "./assets/images/desktop/1.jpg",
    mobile: "./assets/images/mobile/1.jpg",
  },
  {
    desktop: "./assets/images/desktop/2.jpg",
    mobile: "./assets/images/mobile/2.jpg",
  },
  {
    desktop: "./assets/images/desktop/3.jpg",
    mobile: "./assets/images/mobile/3.jpg",
  },
];

export function loadCarouselImages() {
    const container = document.querySelector(".carousel-inner");
    const indicators = document.querySelector(".carousel-indicators");
    const isMobile = window.innerWidth < 768;
  
    container.innerHTML = "";
    indicators.innerHTML = "";
  
    images.forEach((img, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      
      if (index === 0) {
        carouselItem.classList.add("active");
      }
  
      carouselItem.innerHTML = `<img src="${isMobile ? img.mobile : img.desktop}" class="d-block w-100" alt="Slide ${index + 1}">`;
  
      const indicator = document.createElement("button");
      indicator.type = "button";
      indicator.setAttribute("data-bs-target", "#arbellCarousel");
      indicator.setAttribute("data-bs-slide-to", index.toString());
      
      if (index === 0) {
        indicator.classList.add("active");
      }
  
      container.appendChild(carouselItem);
      indicators.appendChild(indicator);
    });
  }