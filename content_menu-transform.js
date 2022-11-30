const contentMenu = document.querySelector('.content_menu')

document.querySelector('.categories').addEventListener("click", ()=> {
   contentMenu.style.transform = 'scale(1)'
})

document.querySelector('.menu_close').addEventListener("click", ()=> {
   contentMenu.style.transform = 'scale(0)'
})