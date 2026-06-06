


const params = new URLSearchParams(window.location.search);

const projectId = params.get("id");

const project = projects.find(
    p => p.id === projectId
);

if(project){

    document.title =
        project.title;

    document.getElementById(
        "project-title"
    ).textContent =
        project.title;

    document.getElementById(
        "project-description"
    ).textContent =
        project.description;

    document.getElementById(
        "project-year"
    ).textContent =
        project.year;

    document.getElementById(
        "project-category"
    ).textContent =
        project.category;

    document.getElementById(
        "hero-image"
    ).src =
        project.heroImage;

    const gallery =
        document.getElementById(
            "project-gallery"
        );

    project.gallery.forEach(image => {

        gallery.innerHTML += `

        <div class="gallery-item">

            <img src="${image}">

        </div>

        `;

    });

}