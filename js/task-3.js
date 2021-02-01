function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
   
  firstArray.forEach(function(elements){
    
     if (secondArray.includes(elements)) {
        commonElements.push(elements);
      }
  
  })

  
    return commonElements;
  
}
  console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))