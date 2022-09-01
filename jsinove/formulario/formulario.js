let inputs = document.getElementsByClassName('formulario__input');
for (let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if (this.value.length >=1){
            this.nextElementSibling.classList.add('fijar');
        } else{
            this.nextElementSibling.classList.remove('fijar');
        }
        })
    }

function validar (){
    let nombre;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;

    expresion = /\w+@\w+\.+[a-z]/;

if (nombre === "" | correo === "" | telefono === "" | mensaje === ""){
    alert("Todos los campos son obligatorios");
    return false;
 }
 else if(nombre.length > 30){
    alert("El nombre es muy largo");
    return false;
 }

 else if(isNaN(telefono)){
    alert("El telefono no es valido")
    return false;
 }
 else if(!expresion.test(correo)){
    alert("El correo no es valido")
    return false;
 }
}
