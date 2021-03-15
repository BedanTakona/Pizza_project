$( document ).ready(function() {
document.getElementById('submit').addEventListener('click', function getName(e){
e.preventDefault();
var pizzaSize = document.getElementById('pizzaSize').selectedIndex;
var pizzaCrust = document.getElementById('crust').selectedIndex;
var pizzaTopping = document.getElementById('topping').selectedIndex;
var pizzaDelivery = document.getElementById('delivery').selectedIndex; 
var quantity = document.getElementById('pizzaNumber').value;


    switch (pizzaSize) {
    
      case 0:  pizzaSize= 1000;
                     break;

      case 1: pizzaSize=500;
                     break;

      case 2: pizzaSize=350;
                     break;
      
      
        
  
                
          
  }
  switch(pizzaCrust){

    case 0 : pizzaCrust = 150 ; 
            break;

    case 1 : pizzaCrust = 175 ; 
            break;

    case 2 : pizzaCrust = 200 ; 
            break;

    case 3 : pizzaCrust = 100 ; 
            break;
    
    

  }



  

    switch (pizzaTopping) {
    
      case 0: pizzaTopping= 150;
                         break;

      case 1:  pizzaTopping=  200;
                         break;

      case 2:  pizzaTopping=  250;
                         break;

      case 3:     pizzaTopping=  150;
                         break;

      case 4: pizzaTopping= 175;
                         break;

      case 5:    pizzaTopping=  250;
                         break;

      
        
   
                
          
  }

    switch (pizzaDelivery) {
    
      case 0:      pizzaDelivery=300;
                   break;

      case 1:        pizzaDelivery= 0;
                         break;

        
         }



  var total = (pizzaCrust + pizzaDelivery + pizzaSize + pizzaTopping) * quantity;

  document.getElementById('total').innerHTML = total;

//alert will be displayed if user chooses delivery

if(pizzaDelivery == 300){
  alert("Your order will be delivered to your location");
}

});



}

)
