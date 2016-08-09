Array.prototype.myMap = function(fn) {
  var final = [];
  this.forEach(function (el) {
    final.push(fn(el));
  });

  return final;
};
