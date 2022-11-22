menuListArray = ["Pizza Vegetariana", "Pizza de Frango", "Pizza Portuguesa", "Pizza de Quatro Queijos", "Pizza de Calabresa", "Pizza Estravaganza"];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=0; i<menuListArray.length; i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
ducument.getElementById("displaymenu").innerHTML = htmldata;
}
function addItem()
var htmldata;
var imgtags='<img id="im1" scr="images/pizzaImages.png"/>'
var item=document.getElementById("addItem").value;
menuListArray . sort();
htmldata=""
for (var i=0; i<menuListArray . length; 1++) {
htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
document. getElementById("displayAddedMenu") . innerHTML = htmldata;


}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item) ;
    addItem();
    
}