let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 500,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 600,
        inCart: 0
    },
    {
        name: 'White Tshirt',
        tag: 'whitetshirt',
        price: 400,
        inCart: 0
    },
    {
        name: 'Red Tshirt',
        tag: 'redtshirt',
        price: 450,
        inCart: 0
    },
    {
        name: 'Green Tshirt',
        tag: 'greentshirt',
        price: 550,
        inCart: 0
    },
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 500,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 600,
        inCart: 0
    },
    {
        name: 'White Tshirt',
        tag: 'whitetshirt',
        price: 400,
        inCart: 0
    },
    {
        name: 'Red Tshirt',
        tag: 'redtshirt',
        price: 450,
        inCart: 0
    },
    {
        name: 'Green Tshirt',
        tag: 'greentshirt',
        price: 550,
        inCart: 0
    },
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 500,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 600,
        inCart: 0
    },
    {
        name: 'White Tshirt',
        tag: 'whitetshirt',
        price: 400,
        inCart: 0
    },
    {
        name: 'Red Tshirt',
        tag: 'redtshirt',
        price: 450,
        inCart: 0
    },
    {
        name: 'Green Tshirt',
        tag: 'greentshirt',
        price: 550,
        inCart: 0
    },
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 500,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 600,
        inCart: 0
    },
    {
        name: 'White Tshirt',
        tag: 'whitetshirt',
        price: 400,
        inCart: 0
    },
    {
        name: 'Red Tshirt',
        tag: 'redtshirt',
        price: 450,
        inCart: 0
    },
    {
        name: 'Green Tshirt',
        tag: 'greentshirt',
        price: 550,
        inCart: 0
    },
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 500,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 600,
        inCart: 0
    },
    {
        name: 'White Tshirt',
        tag: 'whitetshirt',
        price: 400,
        inCart: 0
    },
    {
        name: 'Red Tshirt',
        tag: 'redtshirt',
        price: 450,
        inCart: 0
    },
    {
        name: 'Green Tshirt',
        tag: 'greentshirt',
        price: 550,
        inCart: 0
    }
];



for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumbers(product){
    console.log("The product clicked is ", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

// for cart 

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if( cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div style="margin-left: -100px" class = "product">
                <ion-icon name="close-circle" ></ion-icon>
                <img src="./images/${item.tag}.jpg" width="100%">
                <span style="margin-left: 20px;">${item.name}</span>
            </div>
            <div class="price"><i style="margin-left: 60px; margin-top: -100px;">${item.price}</i></div>
            
            <div class="quant">
                <ion-icon style="font-size:25px;color:#00e600;" name="arrow-dropright-circle"></ion-icon>
                <span><b style="margin-top:100vh; margin-left:-8.5vh; font-size:20px;">${item.inCart}</b></span>
                <ion-icon style="font-size:25px;color:#ff4d4d;" name="arrow-dropleft-circle"></ion-icon>
            </div>
            <div style="position:absolute;left:980px;margin-top:-60px;">
                ${item.inCart*item.price}
            </div>
            `;
        });

        productContainer.innerHTML += `
        <hr><hr>
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                   <pre> Basket Total =  </pre>
                </h4>
                <h4 class="basketTotal">
                   <pre> ₹ ${cartCost} </pre>
                </h4>
            </div>
        `
    }
}



onLoadCartNumbers();
displayCart();
