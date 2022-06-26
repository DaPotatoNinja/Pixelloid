

var cart = JSON.parse(sessionStorage.getItem("products"));
console.log(cart);

for (var product in cart) {
	console.log(product);
}


