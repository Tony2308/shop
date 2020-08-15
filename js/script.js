// selecting elements
let toggleMenu = document.querySelector('div#show-menu .fa-bars');
let menuPane = document.querySelector('.menu');

toggleMenu.addEventListener('click',()=>{
    
    if ( menuPane.style.display === 'none' ) {
        toggleMenu.style.color = 'red';
        menuPane.style.display = 'block';
    } else{

        toggleMenu.style.color = 'white';
        menuPane.style.display = 'none';
    }
});

let shoppingCartAside = document.querySelector('i.fa-shopping-cart');
let main   = document.querySelector('section.productDisplay');
let aside = document.querySelector('.cartAside');
shoppingCartAside.addEventListener('click',()=>{

   if( aside.style.display === 'none' ) {
       aside.style.display = 'block';
       main.style.marginRight = '20%';
   } else {
       aside.style.display = 'none';
   }
});

