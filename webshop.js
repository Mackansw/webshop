$(document).ready(function(){

    //Gnerates products as buttons when called
    function generateProducts() { 
        $.getJSON("products.json", function(response){
            let result = "";
            for(let i = 0; i < 10; i++){
                console.log(response.products[i].Name + " | " + response.products[i].Price);
                result = result + "<button >" + response.products[i].Name + "</button> <br> <br>";
            }
            document.getElementById("products").innerHTML = result;
        })
    }

    generateProducts();
});