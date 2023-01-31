console.log('1. Вёрстка соответствует макету. Ширина экрана 768px 24/24\n',
'блок <header> 2/2\n',
'секция welcome 3/3\n',
'секция about 4/4\n',
'секция service 4/4\n',
'секция prices 4/4\n',
'секция contacts 4/4\n',
'блок <footer> 3/3\n',
'2. Вёрстка соответствует макету. Ширина экрана 380px 24/24\n',
'блок <header> 2/2\n',
'секция welcome 3/3\n',
'секция about 4/4\n',
'секция service 4/4\n',
'секция prices 4/4\n',
'секция contacts 4/4\n',
'блок <footer> 3/3\n',
'3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется 15/15\n',
'нет полосы прокрутки при ширине страницы от 1440рх до 380px 7/7\n',
'нет полосы прокрутки при ширине страницы от 380px до 320рх 8/8\n',
'4. На ширине экрана 380рх и меньше реализовано адаптивное меню 22/22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\n',
'при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка 2/2\n',
'при нажатии на бургер-иконку плавно появляется адаптивное меню 4/4\n',
'адаптивное меню соответствует цветовой схеме макета 4/4\n',
'при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран 4/4\n',
'ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям 4/4\n',
'при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна 4/4\n')

// burger

const hamb = document.querySelector('.hamb');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.navigation-list').cloneNode(1);
const body = document.body;
const links = document.querySelectorAll('.navigation-link');

function renderPopup(){
    popup.appendChild(menu);
}

hamb.addEventListener('click', hambHandler);

popup.addEventListener('click', (event) =>{
    if(event.target.contains!=('navigation-link')){
        popup.classList.remove('open');
        hamb.classList.remove('active');
        body.classList.remove('noscroll');
    } 
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        if(popup.classList.contains('open')){
            popup.classList.remove('open');
            hamb.classList.remove('active');
            body.classList.remove('noscroll');
        }
    });
});

function hambHandler(){
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle('noscroll');
    renderPopup();  
}

function renderPopup(){
    popup.appendChild(menu);
}

//burger

// service blur

const btnService = document.querySelectorAll('.container__service__head-btn');
const cardsServcie = document.querySelectorAll('.container__service__main-box');


btnService.forEach((item, index) => {
    if(index === 0){
        item.addEventListener('click', ()=>{
            cardsServcie.forEach((item, index) => {
                if(index === 5){
                    item.classList.toggle('blur');
                } else if(index === 2){
                    item.classList.toggle('blur');
                } else if(index === 1){
                    item.classList.toggle('blur');
                } else if(index === 3){
                    item.classList.toggle('blur');
                }   
            });
        });
    } else if(index === 1){
        item.addEventListener('click', ()=>{
            cardsServcie.forEach((item, index) => {
                if(index === 0){
                    item.classList.toggle('blur');
                } else if(index === 1){
                    item.classList.toggle('blur');
                } else if(index === 3){
                    item.classList.toggle('blur');
                } else if(index === 4){
                    item.classList.toggle('blur');
                } else if(index === 5){
                    item.classList.toggle('blur');
                };
            });
        });
    } else if(index === 2){
        item.addEventListener('click', ()=>{
            cardsServcie.forEach((item, index) => {
                if(index === 0){
                    item.classList.toggle('blur');
                } else if(index === 2){
                    item.classList.toggle('blur');
                } else if(index === 4){
                    item.classList.toggle('blur');
                };
            });
        });
    }
});

// service blur


 



