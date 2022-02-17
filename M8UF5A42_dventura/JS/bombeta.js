/*function cambia(img){
    img.src="img/llumon.gif";
}
function fora(off){
    off.src="img/llumoff.gif";
}
function trenca(roto){
    roto.src="img/llumbreak.gif";
}*/

window.onload = (event) => {

    var x = document.getElementsByTagName('img')

    for (var i = 0; i < x.length; i++) {

        x[i].addEventListener('click', hola);
        x[i].addEventListener('mouseover', encender);
        x[i].addEventListener('mouseleave', apagar);
    }

    document.addEventListener('keydown', logKey);

function logKey(e) {
  ` ${e.code}`;
}

function hola(){
    
    if (this.getAttribute("src") == "img/llumbreak.gif") {
        this.src = "img/llumoff.gif"
    } else {
        this.src = "img/llumbreak.gif"
    }
}

function encender(){
    
    this.src = "img/llumon.gif"
    
}

function apagar(){
    
    this.src = "img/llumoff.gif"
    
}




}
