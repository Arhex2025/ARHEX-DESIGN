const hero = document.querySelector(".hero");
const navbar = document.querySelector(".navbar");

const contents = document.querySelectorAll(".tab-content");

window.addEventListener("scroll", () => {

    const heroBottom = hero.offsetHeight - 100;

    if(window.scrollY > heroBottom){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

const heroImages = [

    "projectImages/hero-image1.jpg",
    "projectImages/hero-image4.jpg",
    "projectImages/hero-image2.jpg",
    "projectImages/hero-image3.jpg",
    "projectImages/hero-image5.jpg",
    "projectImages/hero-image6.jpg",
];

let currentImage = 0;
const heroBg = document.querySelector(".hero-bg");

function changeHeroImage(){

    heroBg.style.opacity = "0";

    setTimeout(() => {

        currentImage =
            (currentImage + 1)
            % heroImages.length;

        heroBg.style.backgroundImage =
            `url('${heroImages[currentImage]}')`;

        heroBg.style.opacity = "1";

    }, 1000);

}

setInterval(changeHeroImage, 6000);

//hhahdhahdwasddwasd


const projects = [

    {
        id: "villa",

        title: "Villa Phantom",

        category: "exteriors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/villa/villa1.jpg",

        gallery: [

            "projectImages/villa/villa2.jpg",

            "projectImages/villa/villa3.jpg",

            "projectImages/villa/villa4.jpg",

            "projectImages/villa/villa5.jpg",

            "projectImages/villa/villa6.jpg",

            "projectImages/villa/villa7.jpg",

            "projectImages/villa/villa8.jpg",

            "projectImages/villa/villa9.jpg",

            "projectImages/villa/villa10.jpg",

            "projectImages/villa/villa11.jpg",

            "projectImages/villa/villa12.jpg",

            "projectImages/villa/villa13.jpg",

            "projectImages/villa/villa14.jpg",

            "projectImages/villa/villa15.jpg",
        ]
    },

    {
        id: "caffeBar",

        title: "Kafić Kota",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/caffeBar/caffeBar1.jpg",

        gallery: [

            "projectImages/caffeBar/caffeBar2.jpg",

            "projectImages/caffeBar/caffeBar3.jpg",

            "projectImages/caffeBar/caffeBar4.jpg",

            "projectImages/caffeBar/caffeBar5.jpg",

            "projectImages/caffeBar/caffeBar6.jpg",

            "projectImages/caffeBar/caffeBar7.jpg",

        ]
    },

    {
        id: "studio",

        title: "Studio",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/studio/studio1.PNG",

        gallery: [

            "projectImages/studio/studio2.jpg",

            "projectImages/studio/studio3.jpg",

            "projectImages/studio/studio4.jpg",

            "projectImages/studio/studio5.jpg",

        ]
    },

    {
        id: "butik",

        title: "Butik",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/boutique/boutique2.jpg",

        gallery: [


            "projectImages/boutique/hijabi.jpg",

            "projectImages/boutique/hijabi2.jpg",

            "projectImages/boutique/renderHijabi.jpg",

            "projectImages/boutique/renderHijabiShop.jpg",

            "projectImages/boutique/7.jpg",

        ]
    },

    {
        id: "house",

        title: "Kuća",

        category: "exteriors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/house/house1.jpg",

        gallery: [

            "projectImages/house/house2.jpg",

            "projectImages/house/house3.jpg",

            "projectImages/house/house4.jpg",

            "projectImages/house/house5.jpg",

        ]
    },

    {
        id: "house2",

        title: "Kuća 2",

        category: "exteriors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/house2/house1.jpg",

        gallery: [

            "projectImages/house2/house2.jpg",

            "projectImages/house2/house3.jpg",

        ]
    },

    {
        id: "interiors",

        title: "Ostali Enterijeri",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/apartment/apartment2.png",

        gallery: [

            "projectImages/apartment/apartment1.jpg",

            "projectImages/apartment/apartment3.png",

            "projectImages/apartment/apartment4.png",

            "projectImages/apartment/apartment5.jpg",

            "projectImages/apartment/apartment6.jpg",

            "projectImages/apartment/apartment7.jpg",

        ]
    },

    {
        id: "beautySalon",

        title: "Salon Ljepote",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/beautySalon/beautySalon3.png",

        gallery: [

            "projectImages/beautySalon/beautySalon2.png",

            "projectImages/beautySalon/beautySalon1.png",

            "projectImages/beautySalon/beautySalon4.png",

        ]
    },

    {
        id: "gasStation",

        title: "Benzinska Pumpa Cafe Bar",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/gasStation/gasStation1.jpg",

        gallery: [

            "projectImages/gasStation/gasStation2.jpg",

            "projectImages/gasStation/gasStation3.jpg",

            "projectImages/gasStation/gasStation4.jpg",

            "projectImages/gasStation/gasStation5.jpg",

        ]
    },

    {
        id: "interiorCofe",

        title: "Enterijer ljetne bašte",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/interiorCofe/interiorCoffe1.jpg",

        gallery: [

            "projectImages/interiorCofe/interiorCoffee2.jpg",

            "projectImages/interiorCofe/interiorCoffe3.jpg",

            "projectImages/interiorCofe/interiorCoffee4.jpg",

        ]
    },

    {
        id: "london",

        title: "Dizajn enterijera cafe bar London",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/london/london1.jpg",

        gallery: [

            "projectImages/london/london2.jpg",

            "projectImages/london/london3.jpg",

            "projectImages/london/london4.jpg",

            "projectImages/london/london5.jpg",

            "projectImages/london/london6.png",

            "projectImages/london/london7.png",

        ]
    },

    {
        id: "playBoy",

        title: "Dizajn enterijera cafe bar PlayBoy",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/playBoy/playBoy1.jpg",

        gallery: [

            "projectImages/playBoy/playBoy2.jpg",

            "projectImages/playBoy/playBoy3.jpg",

            "projectImages/playBoy/playBoy4.jpg",

        ]
    },

    {
        id: "playBoy2",

        title: "Dizajn enterijera cafe bar PlayBoy 2",

        category: "interiors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/secondPlayBoy/secondPlayBoy1.jpg",

        gallery: [

            "projectImages/secondPlayBoy/secondPlayBoy2.jpg",

            "projectImages/secondPlayBoy/secondPlayBoy3.jpg",

            "projectImages/secondPlayBoy/secondPlayBoy4.jpg",

        ]
    },

    {
        id: "secondVilla",

        title: "Moderni dizajn vile",

        category: "exteriors",

        location: "Sarajevo, Bosnia",

        year: "2025",

        description:
            "",

        heroImage:
            "projectImages/secondVilla/secondVilla2.jpg",

        gallery: [

            "projectImages/secondVilla/secondVilla1.jpg",

            "projectImages/secondVilla/secondVilla3.jpg",

            "projectImages/secondVilla/secondVilla4.jpg",

            "projectImages/secondVilla/secondVilla5.jpg",

        ]
    },
];

const projectContainer =
document.getElementById("projects-container");

function renderProjects(category = "all") {

    projectContainer.style.opacity = "0";
    projectContainer.style.transform = "translateY(20px)";

    setTimeout(() => {

        projectContainer.innerHTML = "";

        const filteredProjects =
            category === "all"
            ? projects
            : projects.filter(
                p => p.category === category
            );

        filteredProjects.forEach((project, index) => {

            const reverse =
                index % 2 === 1
                ? "reverse"
                : "";

            projectContainer.innerHTML += `

            <div class="project ${reverse}">

                <div class="project-image">

                    <img
                        src="${project.heroImage}"
                        alt="${project.title}"
                    >

                </div>

                <div class="project-info">

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                    <a href="project.html?id=${project.id}">
                        View Project →
                    </a>

                </div>

            </div>

            `;

        });

        projectContainer.style.opacity = "1";
        projectContainer.style.transform = "translateY(0px)";

        animateProjects();

    }, 250);

}

function animateProjects() {

    const projectCards =
        document.querySelectorAll(".project");

    projectCards.forEach((project, index) => {

        project.style.opacity = "0";
        project.style.transform = "translateY(40px)";

        setTimeout(() => {

            project.style.transition =
                "opacity .7s ease, transform .7s ease";

            project.style.opacity = "1";
            project.style.transform = "translateY(0)";

        }, index * 120);

    });

}

renderProjects("interiors");

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t =>
            t.classList.remove("active")
        );

        tab.classList.add("active");

        renderProjects(
            tab.dataset.category
        );

    });

});