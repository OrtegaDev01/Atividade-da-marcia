let tabela_jogador = document.getElementById("tabela-usuarios");
const overlay = document.getElementById("overlay");
const caixa_form = document.getElementById("prompt");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
function exibir_users() {
  document.getElementById("qtde-usuarios").innerText = `Quantidade usuários cadastrados:${usuarios.length}`;
  tabela_jogador.innerHTML = "";
  for (let i = 0; i < usuarios.length; i++) {
    let linha = document.createElement("tr");
    linha.innerHTML = ` <tr> <td>${i}</td> <td>${usuarios[i].nome}</td> <td> ${usuarios[i].email}</td> <td class='td-botoes'></td></tr>`;
    tabela_jogador.appendChild(linha);
    let excluir = document.createElement("input");
    excluir.type = "button";
    excluir.value = "Excluir";
    excluir.classList.add("bt-excluir");
    excluir.onclick = () => { usuarios.splice(i, 1); localStorage.setItem("usuarios", JSON.stringify(usuarios)); window.location.reload(); }
    let editar = document.createElement("input");
    editar.type = "button";
    editar.value = "Editar";
    editar.classList.add("bt-editar");
    editar.onclick = () => {
      overlay.style.display = "block";
      caixa_form.style.display = "flex";
      caixa_form.style.gap = "13px"
      caixa_form.style.flexDirection = "column";
      caixa_form.style.justifyContent = "space-between";
      caixa_form.style.alignItems = "center";
      caixa_form.addEventListener("submit", () => {
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
    };
    document.getElementsByClassName("td-botoes")[i].appendChild(excluir);
    document.getElementsByClassName("td-botoes")[i].appendChild(editar);
  }
};
document.getElementById("form-usuario").addEventListener("submit", (evento) => {
  evento.preventDefault();
  let nome = document.getElementById("nome_usuario").value;
  let email = document.getElementById("email_usuario").value;
  localStorage.setItem("usuarios", JSON.stringify(usuarios.push({ nome, email })))
  exibir_users();
});
document.addEventListener("DOMContentLoaded", exibir_users())
document.getElementById("vaticano").addEventListener("click", () => { window.location.href = "https://www.vatican.va/content/vatican/pt.html" });
document.getElementById("cancelar").addEventListener("click", () => { overlay.style.display = "none"; caixa_form.style.display = "none"; });
document.getElementById("bt-reset").addEventListener("click", () => { localStorage.clear(); window.location.reload(); });
console.log("khhebhbderhejrhbeff")
