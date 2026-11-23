
const teams = [
  {
    name: "Mercedes",
    color: "#00a19b",
    drivers: ["George Russell", "Kimi Antonelli"],
    tag: "SILVER ARROWS"
  },
  {
    name: "Ferrari",
    color: "#e10600",
    drivers: ["Charles Leclerc", "Lewis Hamilton"],
    tag: "SCUDERIA"
  },
  {
    name: "McLaren",
    color: "#ff8700",
    drivers: ["Lando Norris", "Oscar Piastri"],
    tag: "PAPAYA TEAM"
  },
  {
    name: "Red Bull Racing",
    color: "#2036a5",
    drivers: ["Max Verstappen", "Isack Hadjar"],
    tag: "RACING TEAM"
  },
  {
    name: "Racing Bulls",
    color: "#6699ff",
    drivers: ["Liam Lawson", "Arvid Lindblad"],
    tag: "VISA CASH APP"
  },
  {
    name: "Alpine",
    color: "#0090ff",
    drivers: ["Pierre Gasly", "Franco Colapinto"],
    tag: "BWT ALPINE"
  },
  {
    name: "Haas",
    color: "#c6c6c6",
    drivers: ["Esteban Ocon", "Oliver Bearman"],
    tag: "TGR HAAS"
  },
  {
    name: "Audi",
    color: "#bb0000",
    drivers: ["Nico Hülkenberg", "Gabriel Bortoleto"],
    tag: "AUDI REVOLUT"
  },
  {
    name: "Williams",
    color: "#005aff",
    drivers: ["Carlos Sainz", "Alexander Albon"],
    tag: "ATLASSIAN"
  },
  {
    name: "Aston Martin",
    color: "#00665e",
    drivers: ["Fernando Alonso", "Lance Stroll"],
    tag: "ARAMCO"
  },
  {
    name: "Cadillac",
    color: "#a7a7a7",
    drivers: ["Sergio Pérez", "Valtteri Bottas"],
    tag: "CADILLAC F1"
  }
];

const drivers = [
  ["George Russell","Mercedes","GR","63","https://commons.wikimedia.org/wiki/Special:FilePath/George_Russell_2022.jpg"],
  ["Kimi Antonelli","Mercedes","KA","12","https://commons.wikimedia.org/wiki/Special:FilePath/Andrea_Kimi_Antonelli_2024.jpg"],
  ["Charles Leclerc","Ferrari","CL","16","https://commons.wikimedia.org/wiki/Special:FilePath/Charles_Leclerc_2019.jpg"],
  ["Lewis Hamilton","Ferrari","LH","44","https://commons.wikimedia.org/wiki/Special:FilePath/Lewis_Hamilton_2020.jpg"],
  ["Lando Norris","McLaren","LN","1","https://commons.wikimedia.org/wiki/Special:FilePath/Lando_Norris_2022.jpg"],
  ["Oscar Piastri","McLaren","OP","81","https://commons.wikimedia.org/wiki/Special:FilePath/Oscar_Piastri_2022.jpg"],
  ["Max Verstappen","Red Bull Racing","MV","3","https://commons.wikimedia.org/wiki/Special:FilePath/Max_Verstappen_2022.jpg"],
  ["Isack Hadjar","Red Bull Racing","IH","6","https://commons.wikimedia.org/wiki/Special:FilePath/Isack_Hadjar_2024.jpg"],
  ["Liam Lawson","Racing Bulls","LL","30","https://commons.wikimedia.org/wiki/Special:FilePath/Liam_Lawson_2023.jpg"],
  ["Arvid Lindblad","Racing Bulls","AL","41",""],
  ["Pierre Gasly","Alpine","PG","10","https://commons.wikimedia.org/wiki/Special:FilePath/Pierre_Gasly_2022.jpg"],
  ["Franco Colapinto","Alpine","FC","43","https://commons.wikimedia.org/wiki/Special:FilePath/Franco_Colapinto_2024.jpg"],
  ["Esteban Ocon","Haas","EO","31","https://commons.wikimedia.org/wiki/Special:FilePath/Esteban_Ocon_2022.jpg"],
  ["Oliver Bearman","Haas","OB","87","https://commons.wikimedia.org/wiki/Special:FilePath/Oliver_Bearman_2024.jpg"],
  ["Nico Hülkenberg","Audi","NH","27","https://commons.wikimedia.org/wiki/Special:FilePath/Nico_Hulkenberg_2022.jpg"],
  ["Gabriel Bortoleto","Audi","GB","5","https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel_Bortoleto_2024.jpg"],
  ["Carlos Sainz","Williams","CS","55","https://commons.wikimedia.org/wiki/Special:FilePath/Carlos_Sainz_2022.jpg"],
  ["Alexander Albon","Williams","AA","23","https://commons.wikimedia.org/wiki/Special:FilePath/Alexander_Albon_2022.jpg"],
  ["Fernando Alonso","Aston Martin","FA","14","https://commons.wikimedia.org/wiki/Special:FilePath/Fernando_Alonso_2022.jpg"],
  ["Lance Stroll","Aston Martin","LS","18","https://commons.wikimedia.org/wiki/Special:FilePath/Lance_Stroll_2022.jpg"],
  ["Sergio Pérez","Cadillac","SP","11","https://commons.wikimedia.org/wiki/Special:FilePath/Sergio_Perez_2022.jpg"],
  ["Valtteri Bottas","Cadillac","VB","77","https://commons.wikimedia.org/wiki/Special:FilePath/Valtteri_Bottas_2022.jpg"]
];

// CLASSIFICAÇÃO DOS PILOTOS
const driverStandings = [
  ["Kimi Antonelli","Mercedes",402],
  ["Max Verstappen","Red Bull Racing",304],
  ["Lewis Hamilton","Ferrari",267],
  ["George Russell","Mercedes",264],
  ["Lando Norris","McLaren",264],
  ["Charles Leclerc","Ferrari",250],
  ["Oscar Piastri","McLaren",167],
  ["Isack Hadjar","Red Bull Racing",122],
  ["Liam Lawson","Racing Bulls",89],
  ["Pierre Gasly","Alpine",52],
  ["Arvid Lindblad","Racing Bulls",38],
  ["Franco Colapinto","Alpine",35],
  ["Oliver Bearman","Haas",23],
  ["Gabriel Bortoleto","Audi",14],
  ["Nico Hülkenberg","Audi",14],
  ["Carlos Sainz","Williams",11],
  ["Esteban Ocon","Haas",7],
  ["Fernando Alonso","Aston Martin",7],
  ["Alexander Albon","Williams",5],
  ["Lance Stroll","Aston Martin",0],
  ["Valtteri Bottas","Cadillac",0],
  ["Sergio Pérez","Cadillac",0]
];

// CLASSIFICAÇÃO DAS EQUIPES
const teamStandings = [
  ["Mercedes",666],
  ["Ferrari",517],
  ["Red Bull Racing",440],
  ["McLaren",431],
  ["Racing Bulls",114],
  ["Alpine",87],
  ["Haas",31],
  ["Audi",28],
  ["Williams",16],
  ["Aston Martin",7],
  ["Cadillac",0]
];

const teamByName = name =>
  teams.find(t => t.name === name) || {color:"#999"};

// MOSTRAR EQUIPES
document.getElementById("teamsGrid").innerHTML =
  teams.map((t,i) => `
    <article class="team-card" style="--team:${t.color}">
      <div class="team-top">
        <span class="team-color"></span>
        <span class="team-index">
          TEAM ${String(i+1).padStart(2,"0")}
        </span>
      </div>

      <h3>${t.name}</h3>
      <div class="team-tag">${t.tag}</div>

      ${t.drivers.map(d => `
        <p class="driver-names">${d}</p>
      `).join("")}

      ${t.name === "Haas"
        ? "<p>Rafael Câmara participa das etapas finais.</p>"
        : ""}
    </article>
  `).join("");

// FILTRO DE EQUIPES
const filter = document.getElementById("teamFilter");

teams.forEach(t => {
  filter.add(new Option(t.name,t.name));
});

// MOSTRAR PILOTOS
function renderDrivers() {
  const q = document
    .getElementById("driverSearch")
    .value.toLowerCase();

  const team = filter.value;

  const list = drivers.filter(d =>
    (team === "all" || d[1] === team) &&
    (`${d[0]} ${d[1]}`.toLowerCase().includes(q))
  );

  document.getElementById("driversGrid").innerHTML =
    list.length
      ? list.map(d => {
          const color = teamByName(d[1]).color;

          const photo = d[4]
            ? `<img src="${d[4]}" alt="Foto de ${d[0]}" loading="lazy" onerror="this.style.display='none'">`
            : "";

          return `
            <article class="driver-card" style="--team:${color}">
              <div class="driver-photo">
                ${photo}
                <span class="initials">${d[2]}</span>
                <span class="driver-number">#${d[3]}</span>
              </div>

              <div class="driver-info">
                <div class="team-name">${d[1]}</div>
                <h3>${d[0]}</h3>
                <small>Piloto • Temporada 2026</small>
              </div>
            </article>
          `;
        }).join("")
      : '<div class="no-results">Nenhum piloto encontrado.</div>';
}

document
  .getElementById("driverSearch")
  .addEventListener("input",renderDrivers);

filter.addEventListener("change",renderDrivers);

renderDrivers();

// CLASSIFICAÇÃO INTERATIVA
function renderStandings(type) {
  const head = document.getElementById("standingHead");
  const body = document.getElementById("standingBody");

  document.querySelectorAll(".tab").forEach(b => {
    b.classList.toggle("active",b.dataset.tab === type);
  });

  if (type === "drivers") {
    head.innerHTML = `
      <tr>
        <th>POS.</th>
        <th>PILOTO</th>
        <th>EQUIPE</th>
        <th>PONTOS</th>
      </tr>
    `;

    body.innerHTML = driverStandings.map((r,i) => {
      const c = teamByName(r[1]).color;

      return `
        <tr>
          <td class="position ${i<3?'top':''}">${i+1}</td>
          <td><b>${r[0]}</b></td>
          <td>
            <span class="team-cell">
              <i class="team-dot" style="background:${c}"></i>
              ${r[1]}
            </span>
          </td>
          <td class="points">${r[2]}</td>
        </tr>
      `;
    }).join("");

  } else {
    head.innerHTML = `
      <tr>
        <th>POS.</th>
        <th>EQUIPE</th>
        <th>PONTOS</th>
      </tr>
    `;

    body.innerHTML = teamStandings.map((r,i) => {
      const c = teamByName(r[0]).color;

      return `
        <tr>
          <td class="position ${i<3?'top':''}">${i+1}</td>
          <td>
            <span class="team-cell">
              <i class="team-dot" style="background:${c}"></i>
              <b>${r[0]}</b>
            </span>
          </td>
          <td class="points">${r[1]}</td>
        </tr>
      `;
    }).join("");
  }
}

document.querySelectorAll(".tab").forEach(b => {
  b.addEventListener("click",() => {
    renderStandings(b.dataset.tab);
  });
});

renderStandings("drivers");
