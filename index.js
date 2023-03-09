//Animação de ir para o lado (Botões: Login e Cadastro)

var formLogin = document.querySelector("#formlogin");
var formCadastro = document.querySelector("#formcadastro");
var btnColor = document.querySelector(".btnColor");

document.querySelector("#btnLogin").addEventListener("click", () => {
  formLogin.style.left = "25px";
  formCadastro.style.left = "450px";
  btnColor.style.left = "0px";
});

document.querySelector("#btnCadastre").addEventListener("click", () => {
  formLogin.style.left = "-450px";
  formCadastro.style.left = "25px";
  btnColor.style.left = "110px";
});

// Validação Login

function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "admin" && senha == "admin") {
        location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
}
