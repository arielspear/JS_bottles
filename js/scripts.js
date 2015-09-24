var sing = function(drink, numberOfBottles) {
  if(numberOfBottles <= 0) {
    var result = "No more bottles of " + drink + " on the wall, no more bottles of " + drink + ". Go to the store and buy some more, so many bottles of " + drink + " on the wall. <br>";
    return result;
  } else if(numberOfBottles === 1) {
    var result = numberOfBottles + " bottle of " + drink + " on the wall, " + numberOfBottles + " bottle of " + drink + ". Take one down, pass it around no more bottles of " + drink + " on the wall. <br>";
    return result + sing(drink, (numberOfBottles - 1));;
  } else {
    result =  numberOfBottles + " bottles of " + drink + " on the wall, " + numberOfBottles + " bottles of " + drink + ". Take one down, pass it around " + (numberOfBottles - 1) + " bottles of " + drink + " on the wall. <br>";
    return result + sing(drink, (numberOfBottles - 1));;
  }
};

$(document).ready(function() {
  $("form#bottles").submit(function(event) {
    var numberOfBottles = parseInt($("input#number").val());
    var drink = ($("input#drink").val());

    var result = sing(drink, numberOfBottles);

    $(".answer").html(result);


    $("#result").show();
    event.preventDefault();
  });
});
