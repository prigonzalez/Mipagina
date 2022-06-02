
document.getElementById("inciarsesion").addEventListener('click',form);
var divmostrar = document.querySelector(".loginRegistro");
var carrito = document.querySelector("#carrito");
function form(){
divmostrar.style.visibility = "visible";
}

document.getElementById("entrar").addEventListener("click",ingresar);
var contenedor = document.querySelector('.imgIngresar');
var form = document.getElementById(".formularioLogin");


function ingresar()
{
var usuario = document.getElementById("user").value;
var pass = document.getElementById("pass").value;
if (usuario == 'admin' && pass == 'admin')
{
divmostrar.style.visibility = "hidden";
carrito.style.visibility = "visible";
}
else{
alert("Usuario y pass incorrectos");
return false;
}
}