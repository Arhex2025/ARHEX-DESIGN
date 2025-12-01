function setupScrollButtons() {
  // Table with button IDs and their target sections
  const buttonMap = [
    { id: "learn-more", target: ".about" },
  ];

  buttonMap.forEach(({ id, target }) => {
    const button = document.getElementById(id);
    if (!button) return;

    button.addEventListener("click", () => {
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function loadProjectsByCategory() {
  const container = document.querySelector(".projects-container");
  if (!container) return;

  // Data source
  const categories = [
    {
      title: "Projekat 1",
      projects: [
        { image: "work/office1.jpeg", name: "Recepcija" },
        { image: "work/office2.jpeg", name: "Cekaonica" },
        { image: "work/office3.jpeg", name: "Radni prostor" },
      ],
    },
    {
      title: "Projekat 2",
      projects: [
        { image: "work/cafe1.jpeg", name: "Drugi sprat" },
        { image: "work/cafe2.jpeg", name: "Prvi sprat" },
        { image: "work/cafe3.jpeg", name: "Bar" },
        { image: "work/cafe4.jpeg", name: "Drugi sprat" },
      ],
    },
    {
      title: "Projekat 3",
      projects: [
        { image: "work/playboy1.jpeg", name: "Slika 1" },
        { image: "work/playboy2.jpeg", name: "Slika 2" },
        { image: "work/playboy3.jpeg", name: "Slika 3" },
        { image: "work/playboy4.jpeg", name: "Slika 4" },
      ],
    },
    {
      title: "Projekat 4",
      projects: [
        { image: "work/neon1.jpeg", name: "Slika 1" },
        { image: "work/neon2.jpeg", name: "Slika 2" },
        { image: "work/neon3.jpeg", name: "Slika 3" },
      ],
    },
    {
      title: "Projekat 5",
      projects: [
        { image: "work/cafeBar1.jpg", name: "Slika 1" },
        { image: "work/cafeBar2.jpg", name: "Slika 2" },
        { image: "work/cafeBar3.jpg", name: "Slika 3" },
      ],
    },
    {
      title: "Projekat 6",
      projects: [
        { image: "work/dnevni1.jpg", name: "Slika 1" },
        { image: "work/dnevni2.jpg", name: "Slika 2" },
        { image: "work/dnevni3.jpg", name: "Slika 3" },
      ],
    },
    {
      title: "Projekat 7",
      projects: [
        { image: "work/pumpa1.jpg", name: "Slika 1" },
        { image: "work/pumpa2.jpg", name: "Slika 2" },
        { image: "work/pumpa3.jpg", name: "Slika 3" },
        { image: "work/pumpa4.jpg", name: "Slika 4" },
      ],
    },

    {
      title: "Projekat 8",
      projects: [
        { image: "work/house1.jpg", name: "Slika 1" },
        { image: "work/house2.jpg", name: "Slika 2" },
        { image: "work/house3.jpg", name: "Slika 3" },
        { image: "work/house4.jpg", name: "Slika 4" },
      ],
    },

    {
      title: "Projekat 9",
      projects: [
        { image: "work/kafic1.jpg", name: "Slika 1" },
        { image: "work/kafic2.jpg", name: "Slika 2" },
        { image: "work/kafic3.jpg", name: "Slika 3" },
      ],
    },

    {
      title: "Projekat 10",
      projects: [
        { image: "work/basta1.jpg", name: "Slika 1" },
        { image: "work/basta2.jpg", name: "Slika 2" },
        { image: "work/basta3.jpg", name: "Slika 3" },
      ],
    },
  ];

  container.innerHTML = "";

  categories.forEach(cat => {
    // Section Title
    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = cat.title;

    // Projects Row
    const row = document.createElement("div");
    row.className = "projects-row";

    cat.projects.forEach(p => {
      const article = document.createElement("article");
      article.className = "project-card";

      article.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <span class="card-title">${p.name}</span>
      `;

      row.appendChild(article);
    });

    container.appendChild(sectionTitle);
    container.appendChild(row);
  });
}

// Optional: automatically load on startup
document.addEventListener("DOMContentLoaded", () => {
  setupScrollButtons();
  loadProjectsByCategory();
});

