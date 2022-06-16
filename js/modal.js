const inicio = document.getElementById("inicio");
const modalContainer = document.getElementById("modalContainer");
const ingresar = document.getElementById("ingresar");
const registrarse = document.getElementById("registrarse");




inicio.addEventListener('click', () => {
    modalContainer.classList.add('show');
});
registrarse.addEventListener('click', () => {
    modalContainer.classList.add('show');
});
ingresar.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

function modificar (){
    document.getElementById('demo').innerHTML = document.getElementById('usuario').value;
}

function capturarDatos(){
    //capturamos las variables de cada uno de los datos del fomulario
    var nombres = document.getElementById("nombres").value; 
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("usuario").value;
  

    //Capturar los elemtos a los cuales les asignaremos los valores
 
    var mNombres = document.getElementById("mNombres");
    var mEmail = document.getElementById("mEmail");
    var mUsuario = document.getElementById("mUsuario");
    var mContraseña = document.getElementById("mConstraseña");


    mNombres.textContent = nombres;
    mEmail.textContent = email;
    mUsuario.textContent = usuario;
    mContraseña.textContent = contraseña;
}