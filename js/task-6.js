
const calculateTotalPrice = (orderedItems)=> {
  let totalPrice = 0;

  orderedItems.forEach((item) =>{
    totalPrice += item;
  });

  return totalPrice;
}
console.log( calculateTotalPrice([164, 48, 291]))