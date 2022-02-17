function validar(){
    var x = document.getElementById("cont_1").value;
    var y = document.getElementById("cont_2").value;
    var z = document.getElementById("usuari").value;
    var w = document.getElementById("usuari_2").value;0

    if(z == w){
        if(localStorage.getItem("nomusuari") == z && localStorage.getItem("passwd") == x){
            alert("Benvingut de nou")
        }
        else{
            if(y == x){
                localStorage.setItem("nomusuari", z)
                localStorage.setItem("passwd", x)
            }
            else{
                alert("Benvingut");
            }  
        }      
    }
    else{
        alert("incorrecte");
    }
} 

function guardar(){
    var p = document.getElementById("usuari_2").value;
    var u = document.getElementById("cognom").value

    localStorage.setItem('nom_1', p);
    localStorage.setItem('cognom_1', u);

}
function recuperar(){
    var recu_nom = localStorage.getItem("nom_1")
    var recu_cog = localStorage.getItem("cognom_1")

    document.getElementById("usuari_2").value=recu_nom
    document.getElementById("cognom").value=recu_cog
}
function esborrar(){
    localStorage.clear()
}
