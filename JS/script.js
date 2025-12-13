// Variables Of Offcanvas
var imgOffcan = document.querySelectorAll(".offcanvas-body img");
var titleOffcan = document.querySelectorAll(".offcanvas-body p")
var offcanDetails = document.querySelector(".offcan-productdetails");
var imgDetails = document.querySelector(".offcan-productdetails img");
var titleDetails = document.querySelector(".offcan-title");
var priceDetails = document.querySelector(".offcan-price");
var closeBtn = document.querySelector(".offcan-productdetails .close");
var offcanvas = document.querySelector(".offcanvas");

// Variables 
var imgProduct = document.querySelectorAll(".card img")



// Events 
imgOffcan.forEach(function (item) {

    item.onclick = function () {
        offcanDetails.style.display = "block";
        offcanvas.style.zIndex = "1";

        var urliImage = item.getAttribute("src");
        imgDetails.setAttribute("src", urliImage);
        
        var myTitle = item.nextElementSibling.textContent;
        titleDetails.textContent = myTitle;

        var myPrice = item.nextElementSibling.nextElementSibling.textContent;
        priceDetails.textContent = "السعر: " + myPrice;
        
    };
    
});

// Events 
imgProduct.forEach(function (item) {

    item.onclick = function () {
        offcanDetails.style.display = "block";

        var urliImage = item.getAttribute("src");
        imgDetails.setAttribute("src", urliImage);
        
        var myTitle = item.nextElementSibling.children[1].textContent;
        titleDetails.textContent = myTitle;

        var myPrice = item.nextElementSibling.lastElementChild.textContent;
        priceDetails.textContent = "السعر: " + myPrice;
        
    };
    
});


closeBtn.onclick = function () {
    offcanDetails.style.display = "none";
    offcanvas.style.zIndex = "1050";
};