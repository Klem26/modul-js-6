function changeEven(numbers, value) {
   
  
  
  const newArray = [];
  
  numbers.forEach(element =>{
    if (element % 2 === 0){
  newArray.push(element + value)
    }else{
    newArray.push(element)
    }
  })
  return newArray;
   
}
  console.log( changeEven([17, 24, 68, 31, 42], 100))