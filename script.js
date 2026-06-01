document.addEventListener('DOMContentLoaded',()=>{
    const menuToggle=document.getElementById('menuToggle');
    const navContainer=document.querySelector('.nav-container');

    MenuToggle.addEventListener('click',()=>{
        navContainer.classList.toggle('active');
        if(NavContainer.classList.toggle('active')){
            menuToggle.innerHTML = '✖';
        }
        else{
            menuToggle.innerHTML = '☰';
        }
    })
})