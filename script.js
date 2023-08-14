function Tabnav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("mouseenter", () => {
        activeTab(index);
      });
    });
  }
}
Tabnav();

function menuMobile() {
  const menumobile = document.getElementById("js-menu");

  function ativarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("ativo");
  }
  menumobile.addEventListener("click", ativarMenu);
}

menuMobile();

function InitScollSuave() {
  const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}

InitScollSuave();

const scrollAnimado = document.querySelectorAll(".js-scroll");
const windowTamanho = window.innerHeight * 0.6;

function animaScroll() {
  scrollAnimado.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowTamanho;
    if (sectionTop < 0) {
      section.classList.add('ativo');
    }
    else{
      section.classList.remove('ativo')
    }
  });
}

animaScroll();

window.addEventListener("scroll", animaScroll);
