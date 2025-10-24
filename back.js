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
      title: "Projektni biro",
      projects: [
        { image: "work/office1.jpeg", name: "Recepcija" },
        { image: "work/office2.jpeg", name: "Cekaonica" },
        { image: "work/office3.jpeg", name: "Radni prostor" },
      ],
    },
    {
      title: "Cafee bar london",
      projects: [
        { image: "work/cafe1.jpeg", name: "Drugi sprat" },
        { image: "work/cafe2.jpeg", name: "Prvi sprat" },
        { image: "work/cafe3.jpeg", name: "Bar" },
        { image: "work/cafe4.jpeg", name: "Drugi sprat" },
      ],
    },
    {
      title: "Playboy Caffee",
      projects: [
        { image: "work/playboy1.jpeg", name: "Slika 1" },
        { image: "work/playboy2.jpeg", name: "Slika 2" },
        { image: "work/playboy3.jpeg", name: "Slika 3" },
        { image: "work/playboy4.jpeg", name: "Slika 4" },
      ],
    },
    {
      title: "Neon Caffee",
      projects: [
        { image: "work/neon1.jpeg", name: "Slika 1" },
        { image: "work/neon2.jpeg", name: "Slika 2" },
        { image: "work/neon3.jpeg", name: "Slika 3" },
      ],
    },
    {
      title: "Cafe bar",
      projects: [
        { image: "work/cafeBar1.jpg", name: "Slika 1" },
        { image: "work/cafeBar2.jpg", name: "Slika 2" },
        { image: "work/cafeBar3.jpg", name: "Slika 3" },
      ],
    },
    {
      title: "Enterijer",
      projects: [
        { image: "work/dnevni1.jpg", name: "Slika 1" },
        { image: "work/dnevni2.jpg", name: "Slika 2" },
        { image: "work/dnevni3.jpg", name: "Slika 3" },
      ],
    },
    {
      title: "Caffee bar benzinska pumpa",
      projects: [
        { image: "work/pumpa1.jpg", name: "Slika 1" },
        { image: "work/pumpa2.jpg", name: "Slika 2" },
        { image: "work/pumpa3.jpg", name: "Slika 3" },
        { image: "work/pumpa4.jpg", name: "Slika 4" },
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
