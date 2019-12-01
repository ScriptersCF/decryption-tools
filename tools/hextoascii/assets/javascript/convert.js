function test(){
  var string = document.getElementById("hex-input").value;
  var result = "";
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i) !== " "){
      result += string.charAt(i);
    }
  }
  if(checkHex(result.toLowerCase())){
    document.getElementById("convert-btn").innerHTML = "Convert";

    var hex  = result.toString();
  	var str = '';
  	for (var n = 0; n < hex.length; n += 2) {
  		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  	}

    document.getElementById("txt-output").value = str;
  }
  else{
    document.getElementById("convert-btn").innerHTML = "Invalid Hex";
  }
}
