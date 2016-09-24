// Is the third string a woven version of the next two strings.

// best recursive answer

function interWoven(str1, str2, str3){
  if(!str3.length && !str2.length && !str1.length){
    return true
  }
  if(str3[0] === str1[0]){
    if(interWoven(str1.slice(1), str2, str3.slice(1))){
      return true
    }
  }
  if(str3[0] === str2[0]){
    if(interWoven(str1, str2.slice(1), str3.slice(1))){
      return true
    }
  }
  return false
}

console.log(interWoven("abc","def","abdcef"))


// Answer when there are no repeated letters.

function interWoven(str1, str2, str3){
  var i3 = 0
  var i2 = 0
  var i1 = 0
  var count = 0
  while(i3 < str3.length){
    if(str3[i3] === str1[i1]){
      i3 += 1
      i1 += 1
      count += 1
    } else if (str3[i3] === str2[i2]){
      i3 += 1
      i2 += 1
      count += 1
    } else {
      console.log([str3[i3],i2,i1, count])
      return false
    }
  }
  return true
}
