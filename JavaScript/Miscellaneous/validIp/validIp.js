function validIp(string){
  var IpArray = string.split(".")
  if (IpArray.length !== 4){
    return false
  }

  for (var i = 0; i < IpArray.length; i++) {
    var num = IpArray[i]
    if(num === ""){
    	return false
    }
    for (var j = 0; j < num.length; j++) {
      if(!parseInt(num[j])){
         return false
      }
    }
    if(parseInt(num) > 255 || parseInt(num) < 0){
      return false
    }
  }
  return true
}

console.log(validIp("244.2444.244.244"))
