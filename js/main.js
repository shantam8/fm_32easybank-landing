let btnMobileMenu = document.querySelector("#iconMobileMenu");
let mobileMenuOverlay = document.querySelector("#mobileNavBgOverlay");
let mobileMenuBlock = document.querySelector("#mobileNavBlock");
let isMobileMenuOpen = false;

function toggleMobileMenu() {
  if (isMobileMenuOpen) {
    mobileMenuOverlay.classList.remove("opened");
    mobileMenuOverlay.classList.add("closed");
    btnMobileMenu.style.backgroundImage = "url('../images/icon-hamburger.svg')";
    isMobileMenuOpen = !isMobileMenuOpen;
  } else {
    mobileMenuOverlay.classList.remove("displayNoneStartClass");
    mobileMenuOverlay.classList.remove("closed");
    mobileMenuOverlay.classList.add("opened");
    btnMobileMenu.style.backgroundImage = "url('../images/icon-close.svg')";

    isMobileMenuOpen = !isMobileMenuOpen;
  }
}

function init() {
  btnMobileMenu.addEventListener("click", toggleMobileMenu);
}

window.onload = init();
