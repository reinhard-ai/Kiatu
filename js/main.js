var Nike = {

    shoeImage: "images/shoes1.jpg",
    shoePrice: 5000,
    shoeDesc: "Lorem ipsum dolor sit amet consecte tur, adipisicing elit. Error cupiditate sed quasi enim. Eligendi, non.",
    shoecolor: "Red",
    shoeSize: "32",
    shoeId: "001"
}

var Jordan = {

    shoeImage: "images/image4.jpg",
    shoePrice: 7000,
    shoeDesc: "Lorem ipsum dolor sit amet consecte tur, adipisicing elit. Error cupiditate sed quasi enim. Eligendi, non.",
    shoecolor: "Red",
    shoeSize: "32",
    shoeId: "002"
}

document.getElementById("productImage").src = Nike.shoeImage;
document.getElementById("price").innerHTML = "KES. " + Nike.shoePrice;
document.getElementById("productDesc").innerHTML = Nike.shoeDesc;

document.getElementById("productImage2").src = Jordan.shoeImage;
document.getElementById("price2").innerHTML = "KES. " + Jordan.shoePrice;
document.getElementById("productDesc2").innerHTML = Jordan.shoeDesc;


document.getElementById("productDiv").onclick = function(){


    window.location.href = "viewmore.html" + "?" + Nike.shoeId;
}

document.getElementById("productDiv2").onclick = function(){


    window.location.href = "viewmore.html" + "?" + Jordan.shoeId;
}