function myFunction() {
    let paragraph = document.getElementById("myParagraph")
 
    let myInput = document.getElementById("zainteresowania")
 
    paragraph.innerHTML = myInput.value

}
let opinia = document.getElementById("opinie")



function Opinie() {
    var newItem = document.createElement("li");
    var textnode = document.createTextNode(opinia.value);
    newItem.appendChild(textnode);
    var list = document.getElementById("opinieList");
    list.appendChild(newItem);
    

}

var arr = []

for (let i = 0; i <5;i++){
    var odpowiedz = prompt("Jakie masz zainteresowania?");
    arr.push(odpowiedz)
    // var lista = document.getElementById("ZainteresowanieList");
    // var listaItem = document.createElement('li');
    // var tekst = document.createTextNode(odpowiedz.value);
    // listaItem.appendChild(tekst);
    // lista.appendChild(listaItem);
    

}

var lista = document.getElementById("ZainteresowanieList");

for( let i=0; i < arr.length; i++){
    var listaItem = document.createElement('li');
    var tekst = document.createTextNode(arr[i]);
    listaItem.appendChild(tekst);
    lista.appendChild(listaItem);
 
}




//przycis.addEventListener("change", Opinie)
let przycis = document.getElementById("przycisk").addEventListener('click',Opinie)