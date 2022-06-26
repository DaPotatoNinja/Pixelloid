

buyNowButton.onclick = BuyNow;
addToBagButton.onclick = AddToBag;

function BuyNow() {
	for (let i = 0; i < (quantityInput.value) ; i++) {
	window.open(products[product]["download"], '_blank').focus();
	}
}

function AddToBag() {
	var cart = JSON.parse(sessionStorage.getItem("products"));
	if (cart == null) {
		cart = {};
	}
	if (cart[product] == null) {
		var productQuantity = Number(quantityInput.value);
	} else {
		var productQuantity = Number(quantityInput.value) + cart[product];
	}
	cart[product] = productQuantity;
	sessionStorage.setItem("products", JSON.stringify(cart));
	cartProducts = JSON.parse(sessionStorage.getItem("products"));
	console.log(cartProducts);
}