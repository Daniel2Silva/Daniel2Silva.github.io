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
};

menuMobile();

const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

function scrollSuave(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollSuave);
});


