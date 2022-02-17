function validar(){
    var x = document.getElementById("cont_1")
    var y = document.getElementById("cont_2")
    var z = document.getElementById("usuari")

    if(z.value == "Ibai"){
        
        if(y.value == "1234" && x.value == "1234"){
            alert("correcte");
        }
        else{
            alert("incorrecte");
        }
    }
    else{
        alert("incorrecte");
    }
}