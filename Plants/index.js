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


 



