function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
 
  
  orderedItems.forEach(function (number){
  totalPrice += number;
  
  });


  return totalPrice;
}
console.log(calculateTotalPrice([164, 48, 291]))