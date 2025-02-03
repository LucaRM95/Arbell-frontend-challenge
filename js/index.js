import { loadComponent } from "./components/script.js";
import { initNavbar } from "./navbar/script.js";
import { loadCarouselImages } from "./carousel/script.js";

document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    loadComponent("navbar-container", "components/navbar.html"),
    loadComponent("carousel-container", "components/carousel.html"),
    loadComponent("search-modal", "components/search_modal.html"),
  ]).then(() => {
    initNavbar();
    loadCarouselImages();
    window.addEventListener("resize", loadCarouselImages);
  });
});

