function checkHex(inputString){
  var re = /^[0-9a-fA-F]+$/;

  if(re.test(inputString)) {
      return true;
  } else {
      return false;
  }
}
