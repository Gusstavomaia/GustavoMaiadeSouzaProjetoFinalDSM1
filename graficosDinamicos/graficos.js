const labels = ["ESI", "WebI", "MBD", "SORC", "DD", "ALP"];
const colors = [
  "#4CAF50",
  "#2196F3",
  "#FF9800",
  "#E91E63",
  "#9C27B0",
  "#00BCD4",
];

function pegarNotas() {
  return [
    Number(document.getElementById("nota1").value),
    Number(document.getElementById("nota2").value),
    Number(document.getElementById("nota3").value),
    Number(document.getElementById("nota4").value),
    Number(document.getElementById("nota5").value),
    Number(document.getElementById("nota6").value),
  ];
}

const barChart = new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels,
    datasets: [
      {
        label: "Notas",
        data: [10, 9.5, 10, 6.5, 10, 6],
        backgroundColor: colors,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { callbacks: { label: (ctx) => `Nota: ${ctx.parsed.y}` } },
    },
  },
});

const lineChart = new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels,
    datasets: [
      {
        label: "Notas",
        data: [10, 9.5, 10, 6.5, 10, 6],
        borderColor: "#FF5722",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { callbacks: { label: (ctx) => `Nota: ${ctx.parsed.y}` } },
    },
  },
});

const radarChart = new Chart(document.getElementById("radarChart"), {
  type: "radar",
  data: {
    labels,
    datasets: [
      {
        label: "Notas",
        data: [10, 9.5, 10, 6.5, 10, 6],
        backgroundColor: "rgba(33,150,243,0.3)",
        borderColor: "#2196F3",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { callbacks: { label: (ctx) => `Nota: ${ctx.parsed.y}` } },
    },
  },
});

const pieChart = new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels,
    datasets: [{ data: [10, 9.5, 10, 6.5, 10, 6], backgroundColor: colors }],
  },
  options: { responsive: true, maintainAspectRatio: false },
});

const doughnutChart = new Chart(document.getElementById("doughnutChart"), {
  type: "doughnut",
  data: {
    labels,
    datasets: [{ data: [10, 9.5, 10, 6.5, 10, 6], backgroundColor: colors }],
  },
  options: { responsive: true, maintainAspectRatio: false },
});

const multiDoughnutChart = new Chart(
  document.getElementById("multiDoughnutChart"),
  {
    type: "doughnut",
    data: {
      labels,
      datasets: [10, 9.5, 10, 6.5, 10, 6].map((n, i) => ({
        label: labels[i],
        data: [n, 10 - n],
        backgroundColor: [colors[i], "#ddd"],
        hoverOffset: 4,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) =>
              ctx.datasetIndex % 2 === 0 ? `Nota: ${ctx.parsed[0]}` : null,
          },
        },
      },
    },
  }
);

function atualizarGrafico() {
  const notas = pegarNotas();
  barChart.data.datasets[0].data = notas;
  barChart.update();
  lineChart.data.datasets[0].data = notas;
  lineChart.update();
  radarChart.data.datasets[0].data = notas;
  radarChart.update();
  pieChart.data.datasets[0].data = notas;
  pieChart.update();
  doughnutChart.data.datasets[0].data = notas;
  doughnutChart.update();
  multiDoughnutChart.data.datasets = notas.map((n, i) => ({
    label: labels[i],
    data: [n, 10 - n],
    backgroundColor: [colors[i], "#ddd"],
    hoverOffset: 4,
  }));
  multiDoughnutChart.update();
}
