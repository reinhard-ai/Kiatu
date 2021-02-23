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



var queryString =  decodeURIComponent(window.location.search);
queryString = queryString.substring(1);




if (queryString == Nike.shoeId){

    document.getElementById("itemImage").src = Nike.shoeImage;
    document.getElementById("itemPrice").innerHTML = "Shoe Price " + Nike.shoePrice;
    document.getElementById("itemDesc").innerHTML= Nike.shoeDesc;

    document.getElementById("itemSize").innerHTML= "Shoe Size " + Nike.shoeSize;
    document.getElementById("itemColor").innerHTML= "Shoe Color " + Nike.shoecolor;


} else if(queryString == Jordan.shoeId){

    document.getElementById("itemImage").src = Jordan.shoeImage;
    document.getElementById("itemPrice").innerHTML = "Shoe Price " + Jordan.shoePrice;
    document.getElementById("itemDesc").innerHTML= Jordan.shoeDesc;

    document.getElementById("itemSize").innerHTML= "Shoe Size " + Jordan.shoeSize;
    document.getElementById("itemColor").innerHTML= "Shoe Color " + Jordan.shoecolor;

}



