const menuBtn = document.querySelector('.menu')
const navBar = document.querySelector('.nav-links')
const closeBtn = document.querySelector('.close')
menuBtn.addEventListener('click', ()=>{
    if(navBar.style.opacity = "0"){
        navBar.style.opacity = "1"
        menuBtn.style.display = "none"
        closeBtn.style.display = "inline-block"
    }
})
closeBtn.addEventListener('click', function(){
    navBar.style.opacity = "0"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
})