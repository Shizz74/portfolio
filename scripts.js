/*Menu -------------------------------------*/
const btnMenu = document.querySelector('.btn-menu');
const menuSmall = document.querySelector('.small-menu');
const menuList = document.querySelectorAll('.small-menu li');

btnMenu.addEventListener('click', function(){
    menuSmall.classList.toggle('unvismenu');
    btnMenu.classList.toggle('unvismenu');
});

for(let i = 0; i<menuList.length; i++){
    menuList[i].addEventListener('click', function(){
        menuSmall.classList.toggle('unvismenu');
        btnMenu.classList.toggle('unvismenu');
    });
}