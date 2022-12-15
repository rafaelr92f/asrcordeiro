const hamburguer = document.querySelector(".hamburguer")
const xClose = document.querySelector("#close")
const halfMenu = document.querySelector(".half-menu")

hamburguer.addEventListener("click",()=>{
    halfMenu.classList.toggle("hide")
})

xClose.addEventListener("click",()=>{
    halfMenu.classList.toggle("hide")
})