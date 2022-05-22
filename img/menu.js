const menuinicio = document.querySelector('.menuinicio');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(menuinicio);  

menuinicio.addEventListener('click', ()=>{
menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
if (menu.classList.contains("spread") && e.target != menu && e.target != menuinicio )
{

    menu.classList.toggle("spread")
}
})
