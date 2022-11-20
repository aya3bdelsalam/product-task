var allProducts = document.querySelectorAll(".card")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var totalPrice = 0 ;
allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + "  /  ";
        if (content.innerHTML != "" ){
            btn.style.display = "block";
        }
    }
})
btn.onclick = function (){
    cost.innerHTML= totalPrice
}




