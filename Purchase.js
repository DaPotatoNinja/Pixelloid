

buyNowButton.onclick = BuyNow;

function BuyNow() {
	for (let i = 0; i < (quantityInput.value) ; i++) {
	window.open(products[product]["download"], '_blank').focus();
	}
}