/*Menu -------------------------------------*/

/*Big-Small-Screen---------------------------*/
const btnMenu = document.querySelector('.btn-menu');
const menuSmall = document.querySelector('.small-menu');
const menuSmallList = document.querySelectorAll('.small-menu li');
const menuBigList = document.querySelectorAll('.big-menu a');
const allBody = document.querySelector('body');
const header = document.querySelector('.portfolio-header');
btnMenu.addEventListener('click', function(){
    menuSmall.classList.toggle('unvismenu');
    allBody.classList.toggle('menu-body');
    header.classList.toggle('unvismenu');
});

for(let i = 0; i<menuSmallList.length; i++){
    menuSmallList[i].addEventListener('click', function(){
        menuSmall.classList.toggle('unvismenu');
        allBody.classList.toggle('menu-body');
        header.classList.toggle('unvismenu');
    });
}

/*Active----------------------------------*/
for(let j = 0; j<menuBigList.length; j++){
    menuBigList[j].addEventListener('click', function(){
        document.querySelector('.active').classList.remove('active');
        menuBigList[j].classList.add('active');
    });
}
