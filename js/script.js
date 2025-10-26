let tabela_jogador = document.getElementById("tabela-usuarios");
const form_user = document.getElementById("form-usuario");
const overlay = document.getElementById("overlay");
const caixa_form = document.getElementById("prompt");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
function deletar(i) {
  usuarios.splice(i, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  window.location.reload();
}
function mostrar_prompt(i) {
  overlay.style.display = "block";
  caixa_form.style.display = "flex";
  caixa_form.style.flexDirection = "column"
  caixa_form.style.justifyContent = "space-between";
  caixa_form.style.alignItems = "center";
  caixa_form.style.gap = "10px"
  caixa_form.addEventListener("submit", function() {
    let caixa_nome = document.getElementById("nome-user").value;
    let caixa_email = document.getElementById("email-user").value;
    if (caixa_nome.trim() != '' && caixa_email.trim() != '') {
      usuarios[i].nome = caixa_nome;
      usuarios[i].email = caixa_email;
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
      overlay.style.display = "none";
      caixa_form.style.display = "none";
    }
    window.location.reload();
  })

}
function exibir_users() {
  tabela_jogador.innerHTML = "";
  for (let i = 0; i < usuarios.length; i++) {
    let linha = document.createElement("tr");
    linha.innerHTML = `<td>${[i]}</td> <td>${usuarios[i].nome}</td> <td> ${usuarios[i].email}</td> <td class='td-botoes'> </td>`;
    tabela_jogador.appendChild(linha);
    let excluir = document.createElement("input");
    excluir.type = "button";
    excluir.id = `excluir${i}`;
    excluir.value = "Excluir";
    excluir.classList.add("bt-excluir");
    excluir.onclick = function() {
      deletar(i);
    };
    document.getElementsByClassName("td-botoes")[i].appendChild(excluir);
    let editar = document.createElement("input");
    editar.type = "button";
    editar.id = `editar${i}`;
    editar.value = "Editar";
    editar.classList.add("bt-editar");
    editar.onclick = () => mostrar_prompt(i);
    document.getElementsByClassName("td-botoes")[i].appendChild(editar);
  }
}
form_user.addEventListener("submit", function(evento) {
  evento.preventDefault();
  let nome = document.getElementById("nome_usuario").value;
  let email = document.getElementById("email_usuario").value;
  usuarios.push({ nome, email });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  exibir_users();
});
document.addEventListener("DOMContentLoaded", function() {
  exibir_users();
});
function resetar() {
  localStorage.clear();
  window.location.reload();
}
