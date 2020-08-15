let products = [
    {
        image: '<img src="./img/jeans.jpg" alt="Denim Jeans" >',
        title: '<h1>Tailored Jeans</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the jeans..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    },

    {
        image: '<img src="./img/wallet.jpg" alt="Denim wallet" >',
        title: '<h1>Leather Wallets</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the wallet..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    },

    {
        image: '<img src="./img/bag.jpg" alt="Denim bags">',
        title: '<h1>Official Bags</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the bags..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    },

    {
        image: '<img src="./img/belt.jpg" alt="Denim Jeans" >',
        title: '<h1>Official Belts</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the jeans..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    },

    {
        image: '<img src="./img/jumper.jpg" alt="Denim Jeans" >',
        title: '<h1>Tailored Jumper</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the jeans..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    },

    {
        image: '<img src="./img/shoes.jpg" alt="Denim shoes" >',
        title: '<h1>Leather shoes</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the jeans..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    },

    {
        image: '<img src="./img/watch.jpg" alt="Denim Jeans">',
        title: '<h1>Designer watches</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the watches..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    },

    {
        image: '<img src="./img/bag.jpg" alt="Denim Jeans">',
        title: '<h1>Designer bags</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the watches..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    },

    {
        image: '<img src="./img/wallet.jpg" alt="Denim Jeans">',
        title: '<h1>Designer watches</h1>',
        price: '<span>$</span><p class="price">19.99</p>',
        caption: '<p>Some text about the watches..</p>',
        purchase:'<p><button>Add to Cart</button></p>'
    }

]
//adding new item to products array
let newProduct = {
    image: '<img src="./img/jeans.jpg" alt="Denim Jeans">',
    title: '<h1>Designer Jeans</h1>',
    price: '<span>$</span><p class="price">19.99</p>',
    caption: '<p>Some text about the designer jeans..</p>',
    purchase:'<p><button>Add to Cart</button></p>'
}

products.push(newProduct);


// adding objects to page

let productDisplay = document.querySelector('.productDisplay');
for( let i = 0; i < products.length; i++){

    let productDiv = document.createElement('div');
    productDiv.className = 'card';
    
    let item = products[i];

    for(let key in item) {
        productDiv.innerHTML += item[key];
        }

    productDisplay.appendChild(productDiv);
    

}

// counting clicked objects on cart
let shoppingCart = document.querySelector('i.fa-shopping-cart');
let counter = 0;
let totalPurchase =[];
let addButton = document.querySelectorAll('div.card p button');
let selection = document.querySelector('.cartAside');
let sumDisplay = document.querySelector('#sumDisplay');
let itemNumber = document.querySelector('#itemNumber');
let selectedItem = document.querySelector('div.card h1'); 

for( i=0; i < addButton.length; i++){
    addButton[i].addEventListener('click',()=>{
        counter +=1;
        shoppingCart.textContent = counter;
        itemNumber.textContent = counter;

        let price = parseFloat(document.querySelector('.price').textContent);
        totalPurchase.push(price);

        let itemLi = document.createElement('li');
        itemLi.textContent = selectedItem.textContent;   
        selection.appendChild(itemLi);
     

        //summing the prices in price arrays 
    let  unit = 0;
    for( i= 0; i< totalPurchase.length; i++){
        
        unit += totalPurchase[i];

        }
        sumDisplay.textContent=unit;  
       
    });
     
}












