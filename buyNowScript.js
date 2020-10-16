var bilde = document.getElementById("bilde");
var indeks = Number; 
var bilder = ["adidas.png","nike.png","reebook.png"];

shoes.onchange = select;
function select() {

  var indeks = document.getElementById("shoes").value;
  
    document.getElementById("bilde").src = bilder[indeks];
    buy.style.opacity = 1;
    document.getElementById("buy").disabled = false;
  
  buy.onclick = function () {
    window.location.reload();
  }
}
