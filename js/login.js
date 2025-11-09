let usuarios = JSON.parse(localStorage.getItem("usuarios"));
document.getElementById("login-cancelar").onclick = () => {
  document.getElementById("form-login").reset();
  window.location.href = "usuarios.html";
};
document.getElementById("form-login").addEventListener("submit", (click) => {
  click.preventDefault();
  const nome = document.getElementById("nome-login").value;
  const email = document.getElementById("email-login").value;
  usuarios.forEach((elemento) => {
    if (nome === elemento.nome && email === elemento.email) {
      window.location.href = "clientes.html"
    }
  });
});

document.getElementById("login-cancelar").onclick = () => window.location.href = "usuarios.html"
