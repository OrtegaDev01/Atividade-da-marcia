let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
document.getElementById("login-cancelar").onclick = () => {
    document.getElementById("form-login").reset();
    window.location.href = "usuarios.html";
};
let tentativas = 3;
let texto = document.getElementById("tentativas");
document.getElementById("form-login").addEventListener("submit", (click) => {
    click.preventDefault();
    let nome = document.getElementById("login-nome");
    let email = document.getElementById("login-email");
    if (usuarios.find((usuario) => usuario.nome == nome && usuario.email == email)) {
        tentativas -= 1;
        window.location.href = "clientes.html";
    } else {
        tentativas -= 1;
        texto.innerText = `Você possui ${tentativas < 2 ? "1 tentativa restante" : `${tentativas} tentativas restantes`}`;
        if (tentativas == 0) {
            window.location.href = "usuarios.html";
        }
    }
});
document.getElementById("login-cancelar").onclick = () => window.location.href = "usuarios.html";
