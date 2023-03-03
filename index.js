var formLogin = document.querySelector('#login');
var formCadastro = document.querySelector('#cadastro');
var btnColor = document.querySelector('.btnColor');

document.querySelector('#btnLogin').addEventListener('click', () => {
    formLogin.style.left = "25px"
    formCadastro.style.left = "450px"
    btnColor.style.left = "0px"
});

document.querySelector('#btnCadastre ').addEventListener('click', () => {
    formLogin.style.left = "-450px"
    formCadastro.style.left = "25px"
    btnColor.style.left = "110px"
});