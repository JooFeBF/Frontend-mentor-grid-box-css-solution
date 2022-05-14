const menu = document.querySelector(".menu-total")
const amenu = document.querySelector(".menu")

let menuOpen = false

amenu.addEventListener("click", ()=>{
    if(menuOpen){
        menuOpen = false
        menu.setAttribute("hidden", " ")
    }
    else{
        menuOpen = true
        menu.removeAttribute("hidden")
    }
})