function validar(){
    var nomusuari = document.getElementById('nom').value;
    var cognomusuari = document.getElementById('cognom').value;
    var tic = document.getElementById('check').checked;

    localStorage.setItem('nom', nomusuari)
    localStorage.setItem('cognom',cognomusuari)

    if(nomusuari){
        if(localStorage.getItem('nom') == nomusuari && localStorage.getItem('cognom') == cognomusuari){
        }else{

        }
    }else{
    }

}

var contingut = document.querySelector('#contingut') 
function agafar() { 
fetch('https://randomuser.me/api/') 
.then(res => res.json()) 
.then(data => { 
console.log(data.results['0']) 
contingut.innerHTML = ` 
<img src="${data.results['0'].picture.large}" 
width="100px" class="img-fluid rounded-circle"> 
<p>Nombre: ${data.results['0'].name.last}</p> 
` 
}) 
}