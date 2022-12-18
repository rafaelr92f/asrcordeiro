const hamburguer = document.querySelector(".hamburguer")
const xClose = document.querySelector("#close")
const halfMenu = document.querySelector(".half-menu")
const orcamentos = document.querySelector("#orcamentos")
const parcerias = document.querySelector("#parcerias")
const submit = document.querySelector("#submit")
const buttons = document.querySelectorAll(".button")

buttons.forEach((e)=>{
    e.addEventListener('click',()=>{
        window.scrollTo(0, 0);
    })
})

hamburguer.addEventListener("click",()=>{
    halfMenu.classList.toggle("hide")
})

xClose.addEventListener("click",()=>{
    halfMenu.classList.toggle("hide")
})

orcamentos.addEventListener("click",()=>{
    orcamentos.classList.add("bg-green")
    orcamentos.classList.remove("bg-darkGreen")
    parcerias.classList.add("bg-darkGreen")
    parcerias.classList.remove("bg-green")
    submit.innerHTML = "Solicitar orçamento"
})

parcerias.addEventListener("click",()=>{
    orcamentos.classList.add("bg-darkGreen")
    orcamentos.classList.remove("bg-green")
    parcerias.classList.add("bg-green")
    parcerias.classList.remove("bg-darkGreen")
    submit.innerHTML = "Entrar em contato"
})