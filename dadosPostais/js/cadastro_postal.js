const cepInput = document.getElementById("cep");
const estadoInput = document.getElementById("estado");
const cidadeInput = document.getElementById("cidade");

const tipoLogradouroInput = document.getElementById("tipo_logradouro");
const nomeRuaInput = document.getElementById("nome_rua");
const bairroInput = document.getElementById("bairro");
const paisInput = document.getElementById("pais");

function limparCampos() {
  estadoInput.value = "";
  cidadeInput.value = "";
  bairroInput.value = "";

  tipoLogradouroInput.value = "";
  nomeRuaInput.value = "";
  paisInput.value = "";
}

function preencherEndereco(dados) {
  if (!("erro" in dados)) {
    estadoInput.value = dados.uf || "";
    cidadeInput.value = dados.localidade || "";
    bairroInput.value = dados.bairro || "";

    tipoLogradouroInput.value = "";
    nomeRuaInput.value = "";
  } else {
    alert("CEP não encontrado. Preencha o endereço manualmente.");
    limparCampos();
  }
}

function buscarCEP() {
  let cep = cepInput.value.replace(/\D/g, "");

  if (cep.length != 8) {
    return;
  }

  limparCampos();

  cepInput.value = cep.substring(0, 5) + "-" + cep.substring(5);

  let url = "https://viacep.com.br/ws/" + cep + "/json/";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.status);
      }
      return response.json();
    })
    .then(preencherEndereco)
    .catch((error) => {
      console.error("Erro na busca de CEP:", error);
      alert(
        "Erro ao consultar o CEP. Verifique sua conexão ou tente mais tarde."
      );
      limparCampos();
    });
}

cepInput.addEventListener("blur", buscarCEP);
