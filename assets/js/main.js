AOS.init();

// for sticky header
const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// side menu

var btn = document.querySelector(".toggle");
var btnst = true;
btn.onclick = function () {
  if (btnst == true) {
    document.querySelector(".toggle span").classList.add("toggle");
    document.getElementById("sidebar").classList.add("sidebarshow");
    btnst = false;
  } else if (btnst == false) {
    document.querySelector(".toggle span").classList.remove("toggle");
    document.getElementById("sidebar").classList.remove("sidebarshow");
    btnst = true;
  }
};
