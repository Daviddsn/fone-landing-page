const icon = document.querySelector(".fa-bars");
const menu = document.querySelector(".main_header_menu");

icon.addEventListener("click",e =>{
    menu.classList.toggle("mobile")
})
