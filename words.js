function cakeWeight(cakes, maxCapacity){
  var bestForWeight = []
  for(var i = 0 ; i <= maxCapacity; i++){
    bestForWeight[i] = 0
  }

  for(var currentCapacity = 0; currentCapacity <= maxCapacity; currentCapacity++){
    var currentMaxValue = 0
    for(var j = 0 ; j< cakes.length; j++){
      var cake = cakes[j]
      if(cake.weight <= currentCapacity){
        var loopBestCapacity = cake.value + bestForWeight[currentCapacity - cake.weight]
        currentMaxValue = Math.max(loopBestCapacity, currentMaxValue)
      }
    }
    bestForWeight[currentCapacity] = currentMaxValue
  }
  console.log(bestForWeight)
  return bestForWeight[maxCapacity]
}
cakeWeight([{weight: 7, value: 160}, {weight: 3, value: 90}, {weight: 2, value: 15}], 20)
