const iconMenuEl = document.querySelector(".icon-menu");
const iconMenuCloseEl = document.querySelector(".icon-menu-close");
const navMobileEl = document.querySelector(".nav-mobile-wrapper");

iconMenuEl.addEventListener("click",()=>{
    navMobileEl.classList.add("active");

})


iconMenuCloseEl.addEventListener("click",()=>{
    navMobileEl.classList.remove("active");

})