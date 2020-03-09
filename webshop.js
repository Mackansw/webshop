$(document).ready(function(){

    let table = "<table> <tr> <th> Produktnamn </th> <th> Pris </th> </tr>";
    let cart = new Array();

    //Creates a cartitem when called
    function CartItem(name, price){
        this.name = name;
        this.price = price;
    }

    //Generates products as buttons when called
    function generateProducts() { 
        $.getJSON("products.json", function(response){
            let result = "";
            for(let i = 0; i < 10; i++){
                result = result + "<button id = 'produkt'>" + response.products[i].Name + "</button> <br> <br>";
            }
            document.getElementById("products").innerHTML = result;
        })
    }

    //Adds events to products when called
    function addProductsEvent(){
        $('body').on('click', '#produkt', function(e){
            e.preventDefault();
            addToCart($(this).text());
        });
    }

    //Adds product to cart when called
    function addToCart(pressedProduct) {
        $.getJSON("products.json", function(response){
            for(let i = 0; i < 10; i++){
                if(response.products[i].Name == pressedProduct){
                    let item = new CartItem(response.products[i].Name, response.products[i].Price);
                    cart.push(item);
                }
            }  
            for(let i = 0; i < cart.length; i++){
                table = table + "<tr> <td>" + cart[i].name + "</td> <td>" + cart[i].price + "</td> </tr>";
            }
            document.getElementById("cart").innerHTML = table + "</table>";
        })
    }

    generateProducts();
    addProductsEvent();
});