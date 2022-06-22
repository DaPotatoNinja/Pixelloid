
document.getElementById("categoryName").innerHTML = products[product]["category"];
document.getElementById("productName").innerHTML = product;
document.getElementById("productPrice").innerHTML = "⟁" + products[product]["price"];
document.getElementById("productDescription").innerHTML = products[product]["description"];
if (products[product]["collection"] == undefined) {
	document.getElementById("productCollection").innerHTML = "none";
} else {
	document.getElementById("productCollection").innerHTML = products[product]["collection"];
}
document.getElementById("productRelease").innerHTML = products[product]["releaseYear"];
document.getElementById("productStyle").innerHTML = products[product]["style"];
document.getElementById("productMedium").innerHTML = products[product]["medium"];

const tags = products[product]["tags"]

for (var tagID in tags) {
	const tagNode = document.getElementById("tag").cloneNode(true);
	const tagText = document.getElementById("tagText").cloneNode(true);
	const tagLink = document.getElementById("tagLink").cloneNode(true);
	tagLink.href = "searchPage.html?searchInput=" + tags[tagID];
	tagText.innerHTML = tags[tagID];
	tagNode.appendChild(tagText);
	tagLink.appendChild(tagNode);
	document.getElementById("tagContainer").appendChild(tagLink);
}

document.getElementById("tag").remove();
document.getElementById("tagText").remove();
document.getElementById("tagLink").remove();

if (products[product]["collection"] == undefined) {
	document.getElementById("moreHeading").innerHTML = "More from this category"
	if (products[product]["category"] == "Pixels") {
		var NameOfCollection = "Christmas";
	} else if (products[product]["category"] == "Worlds") {
		var NameOfCollection = "Cartoon";
	}
} else {
	document.getElementById("moreHeading").innerHTML = "More from this collection"
	var NameOfCollection = products[product]["collection"];
}

const topCollectionProducts = (searchProductsOfCollection(products, NameOfCollection))
document.getElementById("firstItemOutput").href = ((products[(topCollectionProducts)[0]])["detailsLink"]);
document.getElementById("firstItemImage").src = ((products[(topCollectionProducts)[0]])["thumbnail"]);
document.getElementById("firstItemPrice").innerHTML = "⟁" + ((products[(topCollectionProducts)[0]])["price"]);
document.getElementById("firstItemName").innerHTML = topCollectionProducts[0];
document.getElementById("secondItemOutput").href = ((products[(topCollectionProducts)[1]])["detailsLink"]);
document.getElementById("secondItemImage").src = ((products[(topCollectionProducts)[1]])["thumbnail"]);
document.getElementById("secondItemPrice").innerHTML = "⟁" + ((products[(topCollectionProducts)[1]])["price"]);
document.getElementById("secondItemName").innerHTML = topCollectionProducts[1];
document.getElementById("thirdItemOutput").href = ((products[(topCollectionProducts)[2]])["detailsLink"]);
document.getElementById("thirdItemImage").src = ((products[(topCollectionProducts)[2]])["thumbnail"]);
document.getElementById("thirdItemPrice").innerHTML = "⟁" + ((products[(topCollectionProducts)[2]])["price"]);
document.getElementById("thirdItemName").innerHTML = topCollectionProducts[2];
document.getElementById("fourthItemOutput").href = ((products[(topCollectionProducts)[3]])["detailsLink"]);
document.getElementById("fourthItemImage").src = ((products[(topCollectionProducts)[3]])["thumbnail"]);
document.getElementById("fourthItemPrice").innerHTML = "⟁" + ((products[(topCollectionProducts)[3]])["price"]);
document.getElementById("fourthItemName").innerHTML = topCollectionProducts[3];