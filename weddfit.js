

var MenuItems=document.getElementById("MenuItems");


     function menutoggle(){
         if(MenuItems.style.maxHeight=="0px"){
            MenuItems.style.maxHeight="200px";
         }
         else{
            MenuItems.style.maxHeight="0px";
         }
     }





function myFunction(smallImg){
        var fullImg = document.getElementById("productImg");
        fullImg.src = smallImg.src;
       }     




var removeCartItemsB=document.getElementsByClassName("remove")
console.log(removeCartItemsB)
for(var i=0; i< removeCartItemsB.length; i++){
    var button = removeCartItemsB[i]
    button.addEventListener('click',function(event){
        var buttonClicked = event.target    
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
      //   updateTotal()
    })
}



var toTop = document.querySelector('.toTop');
window.addEventListener('scroll',()=>{
   if(window.pageYOffset>100){
      toTop.classList.add("active");
   }
   else{
      toTop.classList.remove("active");
   }
})








// var myButton = document.getElementById('myBtn');

// window.onscroll = function() {scrollFunction()};

// function scrollFunction(){
//    if(document.body.scrollTop>200|| document.documentElement.scrollTop>200){
//       myButton.style.display='block';
//    }
//    else{
//       mybutton.style.display = "none";
//    }
// }
// function topFunction() {

//    document.documentElement.scrollTop = 0; 
//  }








// function updateTotal(){
//     var cartItemContainer = document.getElementsByClassName('cart-row')[0]
//     var cartRows= cartItemContainer.getElementsByClassName('cart-row')
//     for(var i=0; i< cartRows.length; i++){
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('quantity')[0]
//         var price = parseFloat(priceElement.innerText.replce('₹ ',''))
//         var quantity = quantityElement.value
//         console.log(price*quantity)

//     }
// }