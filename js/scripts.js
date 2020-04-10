////////////////// Back-end ///////////////
function Pizza() {
  this.cost = 0;
}

Pizza.prototype.sizePrice = function (size) {
  if (size === "1") {
    this.cost += 5;
  } else if (size === "2" ) {
    this.cost += 8;
  } else if (size === "3") {
    this.cost += 11;
  }
  return this.cost;
}

Pizza.prototype.toppingsPrice = function (toppings) {
  if (toppings) {
    this.cost += 1.50;
  }
  console.log(this.cost);
}

////////////////// Front-end //////////////////
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    let theUsersPizza = new Pizza();
    let theUsersSize = $("[name = size]").val();
    theUsersPizza.sizePrice(theUsersSize);
    $("input:checkbox[name = topping]:checked").each(function () {
      var usersToppings = $(this).val();
      theUsersPizza.toppingsPrice(usersToppings);
    });
  });
});