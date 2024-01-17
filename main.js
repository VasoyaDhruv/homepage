const nav = document.querySelector("nav");
const mobilenav = document.querySelector('nav.mobile-nav');
const menuContainer = document.querySelector(".mobile-menu-container");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");

window.addEventListener("scroll",() => {
  if(window.scrollY > 60)  {
    nav.classList.add("scrolled");
    mobilenav.classList.add("scrolled")
  }else{
    nav.classList.remove("scrolled")
    mobilenav.classList.remove("scrolled")
  }
})

menuIcon.addEventListener("click",() => {
  menuContainer.classList.add("active");
})

closeIcon.addEventListener("click",() => {
  menuContainer.classList.remove("active");
})



