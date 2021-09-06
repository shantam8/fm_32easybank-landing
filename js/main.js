let btnMobileMenu = document.querySelector("#iconMobileMenu");
let mobileMenuOverlay = document.querySelector("#mobileNavBgOverlay");
let mobileMenuBlock = document.querySelector("#mobileNavBlock");
let isMobileMenuOpen = false;

function toggleMobileMenu() {
  if (isMobileMenuOpen) {
    mobileMenuOverlay.classList.remove("opened");
    mobileMenuOverlay.classList.add("closed");
    document.querySelector("body").classList.remove("overflowHidden");
    btnMobileMenu.style.backgroundImage = "url('../images/icon-hamburger.svg')";
    btnMobileMenu.setAttribute("aria-label", "open   mobile menu");;
    isMobileMenuOpen = !isMobileMenuOpen;
  } else {
    mobileMenuOverlay.classList.remove("displayNoneStartClass");
    mobileMenuOverlay.classList.remove("closed");
    mobileMenuOverlay.classList.add("opened");
    document.querySelector("body").classList.add("overflowHidden");
    btnMobileMenu.style.backgroundImage = "url('../images/icon-close.svg')";
    btnMobileMenu.setAttribute("aria-label", "close mobile menu");;
    isMobileMenuOpen = !isMobileMenuOpen;
  }
}

function closeMobileMenuOnResize() {
  if (isMobileMenuOpen && window.innerWidth > 800) {
    toggleMobileMenu();
  }
}

function init() {
  btnMobileMenu.addEventListener("click", toggleMobileMenu);
  window.addEventListener("resize", closeMobileMenuOnResize);
}

window.onload = init();
