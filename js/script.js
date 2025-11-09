let tabela_jogador = document.getElementById("tabela-usuarios");
const overlay = document.getElementById("overlay");
const caixa_form = document.getElementById("prompt");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
function exibir_users() {
  document.getElementById("qtde-usuarios").innerText =
    `Quantidade usuários cadastrados: ${usuarios.length === null || usuarios.length === undefined ? "Não há nenhum usuário" : usuarios.length}`;
  tabela_jogador.replaceChildren();
  for (let i = 0; i < usuarios.length; i++) {
    let linha = document.createElement("tr");
    linha.innerHTML = ` <td>${i}</td> <td>${usuarios[i].nome}</td> <td> ${usuarios[i].email}</td> <td class='td-botoes'> <input type='button' class='bt-excluir' value = 'Excluir'><input type = 'button' class='bt-editar' value='Editar'></td>`;
    tabela_jogador.appendChild(linha);
    document.getElementsByClassName("bt-excluir")[i].onclick = () => {
      usuarios.splice(i, 1);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      window.location.reload();
    };
    document.getElementsByClassName("bt-editar")[i].onclick = () => {
      document.getElementById("nome-user").value = usuarios[i].nome;
      document.getElementById("email-user").value = usuarios[i].email;
      overlay.style.display = "block";
      caixa_form.style.display = "flex";
      caixa_form.style.gap = "13px";
      caixa_form.style.flexDirection = "column";
      caixa_form.style.justifyContent = "space-between";
      caixa_form.style.alignItems = "center";
      caixa_form.addEventListener("submit", (change) => {
        change.preventDefault();
        let caixa_nome = document.getElementById("nome-user").value;
        let caixa_email = document.getElementById("email-user").value;
        usuarios[i].nome = caixa_nome;
        usuarios[i].email = caixa_email;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        overlay.style.display = "none";
        caixa_form.style.display = "none";
        window.location.reload();
      });
    };
  }
}

document.getElementById("form-usuario").addEventListener("submit", (evento) => {
  evento.preventDefault();
  let nome = document.getElementById("nome_usuario").value;
  let email = document.getElementById("email_usuario").value;
  (usuarios.push({ nome, email }),
    localStorage.setItem("usuarios", JSON.stringify(usuarios)));
  exibir_users();
});
document.addEventListener("DOMContentLoaded", exibir_users());
document.getElementById("vaticano").onclick = () => {
  window.location.href = "https://www.vatican.va/content/vatican/pt.html";
};
document.getElementById("cancelar").onclick = () => {
  overlay.style.display = "none";
  caixa_form.style.display = "none";
};
document.getElementById("reset").onclick = () => {
  localStorage.clear();
  window.location.reload();
};
