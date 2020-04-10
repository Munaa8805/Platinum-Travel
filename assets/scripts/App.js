// import "../styles/styles.css";

//// Hamburger menu hiij bn
class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu_icon");
    this.menuContent = document.querySelector(".site-header__menu-content");
    this.siteHeader = document.querySelector(".site-header");
    this.events();
  }
  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }
  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible");
    this.siteHeader.classList.toggle("site-header--is-expanded");
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
  }
}

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll(".feature-item");
    this.hideInitially();
    this.events();
  }
  events() {
    window.addEventListener("scroll", () => {
      this.itemsToReveal.forEach((el) => {
        this.calculateIfScrolledTo(el);
      });
    });
  }
  calculateIfScrolledTo(el) {
    let scrollPercent =
      (el.getBoundingClientRect().y / window.innerHeight) * 100;
    if (scrollPercent < 75) {
      el.classList.add("reveal-item--is-visible");
    }
  }
  hideInitially() {
    this.itemsToReveal.forEach(function (el) {
      el.classList.add("reveal-item");
    });
  }
}
let mobileMenu = new MobileMenu();
let revealOnScroll = new RevealOnScroll();
