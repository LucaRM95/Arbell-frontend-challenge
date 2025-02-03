export function initNavbar() {
  const menuToggle = document.getElementById("menuToggle");
  const offCanvasMenu = document.getElementById("offCanvasMenu");
  const closeMenu = document.getElementById("closeMenu");
  const searchInput = document.querySelector(".search-input");

  menuToggle.addEventListener("click", function () {
      offCanvasMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
  });

  closeMenu.addEventListener("click", function () {
      offCanvasMenu.classList.remove("active");
      menuToggle.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
      if (
          !offCanvasMenu.contains(event.target) &&
          !menuToggle.contains(event.target)
      ) {
          offCanvasMenu.classList.remove("active");
          menuToggle.classList.remove("active");
      }
  });

  window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
          searchInput.focus();
      }
  });
}
