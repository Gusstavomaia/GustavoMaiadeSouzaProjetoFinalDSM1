const dadosPizzas = [
  {
    id: 1,
    sabor: "Mussarela",
    ingredientes: "(Mussarela/Tomate)",
    broto: 27.0,
    grande: 45.0,
    tipo: "salgada",
  },
  {
    id: 2,
    sabor: "Portuguesa",
    ingredientes: "(Mussarela/Presunto/Palmito/Ovos/Ervilha)",
    broto: 28.0,
    grande: 48.0,
    tipo: "salgada",
  },
  {
    id: 3,
    sabor: "Bauru c/ Catupiry",
    ingredientes: "(Mussarela/Presunto/Tomate/Catupiry)",
    broto: 27.0,
    grande: 47.0,
    tipo: "salgada",
  },
  {
    id: 4,
    sabor: "Lombinho Canadense c/ Catupiry",
    ingredientes: "(Mussarela/Lombinho/Tomate/Cebola/Catupiry)",
    broto: 28.0,
    grande: 48.0,
    tipo: "salgada",
  },
  {
    id: 5,
    sabor: "Calabresa Acebolada",
    ingredientes: "(Mussarela/Calabresa/Cebola)",
    broto: 28.0,
    grande: 47.0,
    tipo: "salgada",
  },
  {
    id: 6,
    sabor: "Calabresa c/ Catupiry",
    ingredientes: "(Mussarela/Calabresa/Cebola/Catupiry)",
    broto: 29.0,
    grande: 49.0,
    tipo: "salgada",
  },
  {
    id: 7,
    sabor: "Baiana",
    ingredientes: "(Mussarela/Calabresa/Ovos/Cebola/Pimenta Calabresa)",
    broto: 28.0,
    grande: 49.0,
    tipo: "salgada",
  },
  {
    id: 8,
    sabor: "Frango c/ Catupiry",
    ingredientes: "(Mussarela/Frango/Catupiry)",
    broto: 28.0,
    grande: 48.0,
    tipo: "salgada",
  },
  {
    id: 9,
    sabor: "Franbacon Especial",
    ingredientes: "(Mussarela/Frango/Bacon/Ovos/Milho/Tomate/Catupiry)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 10,
    sabor: "4 Queijos",
    ingredientes: "(Mussarela/Gorgonzola/Parmesão/Catupiry)",
    broto: 28.0,
    grande: 48.0,
    tipo: "salgada",
  },
  {
    id: 11,
    sabor: "Bacon",
    ingredientes: "(Mussarela/Bacon)",
    broto: 29.0,
    grande: 49.0,
    tipo: "salgada",
  },
  {
    id: 12,
    sabor: "Italiana",
    ingredientes: "(Mussarela/Lombinho/Calabresa/Palmito/Ervilha/Milho/Cebola)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 13,
    sabor: "Capetinga",
    ingredientes: "(Mussarela/Lombinho/Tomate/Cebola/Parmesão/Catupiry)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 14,
    sabor: "Saboretto",
    ingredientes: "(Mussarela/Rolo de Presunto c/ Catupiry e Bacon)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 15,
    sabor: "D'Pizzaíolo",
    ingredientes: "(Mussarela/Bacon/Presunto/Lombinho/Milho/Catupiry)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 16,
    sabor: "Espanhola",
    ingredientes:
      "(Mussarela/Calabresa/Bacon/Tomate/Alho Frito/Cebola/Catupiry)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 17,
    sabor: "Nardo",
    ingredientes: "(Mussarela/Calabresa/Bacon/Tomate/Cebola/Catupiry)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 18,
    sabor: "Contra Filé",
    ingredientes: "(Mussarela/Contra-Filé/Tomate/Cebola)",
    broto: 35.0,
    grande: 55.0,
    tipo: "salgada",
  },
  {
    id: 19,
    sabor: "Pizza Bar",
    ingredientes: "(Mussarela/Presunto/Bacon/Milho/Palmito/Cebola)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 20,
    sabor: "Romana",
    ingredientes: "(Mussarela/Peito de Peru/Catupiry/Milho/Tomate)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 21,
    sabor: "Pepperoni",
    ingredientes: "(Mussarela/Pepperoni/Palmito/Pimentão Verde/Cebola)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 22,
    sabor: "Atum",
    ingredientes: "(Mussarela/Atum/Tomate/Cebola)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 23,
    sabor: "Marguerita",
    ingredientes: "(Mussarela/Manjericão Fresco/Parmesão/Tomate/Duplo Molho)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 24,
    sabor: "Frangokill",
    ingredientes: "(Mussarela/Frango/Provolone/Catupiry/Barbecue)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 25,
    sabor: "FranPalha",
    ingredientes: "(Mussarela/Frango/Catupiry/Provolone/Batata Palha)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 26,
    sabor: "Bacon Especial",
    ingredientes: "(Mussarela/Bacon/Presunto/Ovo/Cebola)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 27,
    sabor: "Milho Cremoso",
    ingredientes: "(Mussarela/Milho/Catupiry)",
    broto: 29.0,
    grande: 48.0,
    tipo: "salgada",
  },
  {
    id: 28,
    sabor: "Palmito Cremoso",
    ingredientes: "(Mussarela/Palmito/Catupiry)",
    broto: 29.0,
    grande: 48.0,
    tipo: "salgada",
  },
  {
    id: 29,
    sabor: "5 Queijos",
    ingredientes: "(Mussarela/Gorgonzola/Parmesão/Catupiry/Provolone)",
    broto: 29.0,
    grande: 49.0,
    tipo: "salgada",
  },
  {
    id: 30,
    sabor: "6 Queijos",
    ingredientes: "(Mussarela/Gorgonzola/Parmesão/Catupiry/Provolone/Cheddar)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 31,
    sabor: "Toscana",
    ingredientes: "(Mussarela/Calabresa/Bacon/Cebola)",
    broto: 29.0,
    grande: 49.0,
    tipo: "salgada",
  },
  {
    id: 32,
    sabor: "Três Amores",
    ingredientes: "(Mussarela/Presunto/Provolone/Tomate)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 33,
    sabor: "Vegetariana",
    ingredientes: "(Mussarela/Palmito/Milho/Ervilha)",
    broto: 28.0,
    grande: 48.0,
    tipo: "salgada",
  },
  {
    id: 34,
    sabor: "Califórnia",
    ingredientes: "(Mussarela/Presunto/Cheddar/Bacon/Palmito/Cebola)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 35,
    sabor: "Paulista",
    ingredientes: "(Mussarela/Milho/Bacon/Ervilha/Provolone)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 36,
    sabor: "À moda",
    ingredientes: "(Mussarela/Lombinho/Milho/Provolone)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },
  {
    id: 37,
    sabor: "Veloni",
    ingredientes: "(Mussarela/Alho Frito)",
    broto: 29.0,
    grande: 49.0,
    tipo: "salgada",
  },
  {
    id: 38,
    sabor: "Texana",
    ingredientes: "(Mussarela/Frango/Cheddar/Bacon)",
    broto: 30.0,
    grande: 50.0,
    tipo: "salgada",
  },

  {
    id: 45,
    sabor: "Banana",
    ingredientes: "(Mussarela/Canela c/Açúcar/Banana Fatiada)",
    broto: 27.0,
    grande: 45.0,
    tipo: "doce",
  },
  {
    id: 46,
    sabor: "Chocolate ao Leite",
    ingredientes: "(Com raspas de chocolate/Cereja ou Confete)",
    broto: 28.0,
    grande: 47.0,
    tipo: "doce",
  },
  {
    id: 47,
    sabor: "Romeu e Julieta",
    ingredientes: "(Mussarela/Goiabada)",
    broto: 26.0,
    grande: 45.0,
    tipo: "doce",
  },
  {
    id: 48,
    sabor: "Mesclado",
    ingredientes: "(Chocolate Branco/Creme de Avelã)",
    broto: 28.0,
    grande: 48.0,
    tipo: "doce",
  },
  {
    id: 49,
    sabor: "Ovomaltine",
    ingredientes: "(Creme de Ovomaltine/Rocks)",
    broto: 30.0,
    grande: 50.0,
    tipo: "doce",
  },
  {
    id: 50,
    sabor: "Uva Doce",
    ingredientes: "(Chocolate ao leite/Uvas verdes)",
    broto: 30.0,
    grande: 50.0,
    tipo: "doce",
  },
  {
    id: 51,
    sabor: "Morango Doce",
    ingredientes: "(Chocolate ao leite/Morangos)",
    broto: 30.0,
    grande: 50.0,
    tipo: "doce",
  },
  {
    id: 52,
    sabor: "Paçoca",
    ingredientes: "(Doce de Leite Moça/Paçoca)",
    broto: 28.0,
    grande: 48.0,
    tipo: "doce",
  },
  {
    id: 53,
    sabor: "Pizza Bis - (Preto ou Branco)",
    ingredientes: "(Chocolate ao leite/Bis)",
    broto: 28.0,
    grande: 47.0,
    tipo: "doce",
  },
  {
    id: 54,
    sabor: "Sorvete",
    ingredientes: "(Chocolate ao leite/Raspas Mescladas/Sorvete)",
    broto: 33.0,
    grande: 55.0,
    tipo: "doce",
  },
  {
    id: 55,
    sabor: "Nutella Ferrero",
    ingredientes: "(Nutella Original com Leite Ninho ou Ferrero/Castanhas)",
    broto: 30.0,
    grande: 50.0,
    tipo: "doce",
  },
  {
    id: 56,
    sabor: "Chocolate Branco",
    ingredientes: "(Com raspas de chocolate branco/Cereja ou Confete)",
    broto: 28.0,
    grande: 47.0,
    tipo: "doce",
  },
  {
    id: 57,
    sabor: "Banana Caramelizada",
    ingredientes:
      "(Mussarela/Canela c/Açúcar/Banana Fatiada/Chocolate Branco Caramelizado)",
    broto: 30.0,
    grande: 50.0,
    tipo: "doce",
  },
];

let sortConfig = { key: "id", direction: "asc" };

function formatarMoeda(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

function construirTabela(dados) {
  const tabelaContainer = document.getElementById("tabela_container");
  tabelaContainer.innerHTML = "";

  if (dados.length === 0) {
    tabelaContainer.innerHTML =
      "<p>Nenhuma pizza encontrada com o termo de busca.</p>";
    return;
  }

  const tabela = document.createElement("table");
  tabela.id = "tabela_cardapio";

  const thead = tabela.createTHead();
  const linhaCabecalho = thead.insertRow();

  const chaves = ["id", "sabor", "broto", "grande"];
  const nomesCabecalho = {
    id: "Nº",
    sabor: "Sabor / Ingredientes",
    broto: "Broto",
    grande: "Grande",
  };

  chaves.forEach((chave) => {
    let th = document.createElement("th");
    th.textContent = nomesCabecalho[chave];
    th.setAttribute("data-key", chave);

    if (sortConfig.key === chave) {
      th.classList.add("ordenacao-ativa", sortConfig.direction);
    }

    th.addEventListener("click", () => ordenarTabela(chave));

    linhaCabecalho.appendChild(th);
  });

  const tbody = tabela.createTBody();

  dados.forEach((item) => {
    let linhaCorpo = tbody.insertRow();

    let tdId = linhaCorpo.insertCell();
    tdId.textContent = item.id;

    let tdSabor = linhaCorpo.insertCell();
    tdSabor.innerHTML = `<span class="nome-pizza">${item.sabor}</span><p class="ingredientes">${item.ingredientes}</p>`;

    let tdBroto = linhaCorpo.insertCell();
    tdBroto.textContent = formatarMoeda(item.broto);
    tdBroto.classList.add("preco");

    let tdGrande = linhaCorpo.insertCell();
    tdGrande.textContent = formatarMoeda(item.grande);
    tdGrande.classList.add("preco");
  });

  tabelaContainer.appendChild(tabela);
}

function ordenarTabela(chave) {
  let newDirection = "asc";

  if (sortConfig.key === chave) {
    newDirection = sortConfig.direction === "asc" ? "desc" : "asc";
  }

  sortConfig = { key: chave, direction: newDirection };

  atualizarTabela();
}

function atualizarTabela() {
  const termoBusca = document
    .getElementById("busca_input")
    .value.toLowerCase()
    .trim();

  const dadosFiltrados = dadosPizzas.filter((pizza) => {
    const idString = String(pizza.id);
    return (
      idString.includes(termoBusca) ||
      pizza.sabor.toLowerCase().includes(termoBusca) ||
      pizza.ingredientes.toLowerCase().includes(termoBusca)
    );
  });

  dadosFiltrados.sort((a, b) => {
    const chave = sortConfig.key;
    let valA = a[chave];
    let valB = b[chave];

    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();

    if (typeof valA === "number") {
      return sortConfig.direction === "asc" ? valA - valB : valB - valA;
    }

    if (valA < valB) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (valA > valB) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  construirTabela(dadosFiltrados);
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarTabela();

  const botaoBusca = document.getElementById("botao_busca");
  botaoBusca.addEventListener("click", atualizarTabela);

  const inputBusca = document.getElementById("busca_input");
  inputBusca.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      atualizarTabela();
    }
  });
});
