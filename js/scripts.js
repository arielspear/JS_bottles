var sing = function(drink, numberOfBottles) {
  if(numberOfBottles <= 0) {
    var result = "No more bottles of " + drink + " on the wall, no more bottles of " + drink + ". Go to the store and buy some more, so many bottles of " + drink + " on the wall. ";
    return result;
  } else if(numberOfBottles === 1) {
    var result = numberOfBottles + " bottle of " + drink + " on the wall, " + numberOfBottles + " bottle of " + drink + ". Take one down, pass it around no more bottles of " + drink + " on the wall. ";
    return result;
  } else {
    result =  numberOfBottles + " bottles of " + drink + " on the wall, " + numberOfBottles + " bottles of " + drink + ". Take one down, pass it around " + (numberOfBottles - 1) + " bottles of " + drink + " on the wall. ";
    return result;
  }
}
