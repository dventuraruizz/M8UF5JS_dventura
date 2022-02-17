function operacions(x){
    document.getElementById("bar").value+=x
}
function calcular(){
    var resultat = document.getElementById("bar").value
    document.getElementById('bar').value=eval(resultat)
}
function borrar(){
    document.getElementById('bar').value=" "
}