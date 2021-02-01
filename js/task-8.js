
const  getCommonElements = (firstArray, secondArray) =>{
    const commonElements = [];
  
    firstArray.forEach((element)=> {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
   
    return commonElements;
}
  console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))