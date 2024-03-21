const inputController = (input)=>{
  if (input === "") return false
  else return true ; 
}
const verifyNumber = (phoneNumber) => {

    if(phoneNumber === "") return false
    if (phoneNumber.length !== 8 || isNaN(phoneNumber)) {
      return true;
    }

    if (![2, 4, 5, 7, 9].includes(parseInt(phoneNumber[0]))) {
      return true;
    }
    return false;
  };


  const verifyLength = (txt)=>{
    
    if (txt.length > 5 || txt.length ===0 ) {
      return false;
    } else {
      return true;
    }
  }
  export { verifyNumber,inputController,verifyLength };