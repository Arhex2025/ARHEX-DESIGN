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
            "villa/villa1.jpg",

        gallery: [

            "villa/villa2.jpg",

            "villa/villa3.jpg",

            "villa/villa4.jpg",

            "villa/villa5.jpg",

            "villa/villa6.jpg",

            "villa/villa7.jpg",

            "villa/villa8.jpg",

            "villa/villa9.jpg",

            "villa/villa10.jpg",

            "villa/villa11.jpg",

            "villa/villa12.jpg",

            "villa/villa13.jpg",

            "villa/villa14.jpg",

            "villa/villa15.jpg",
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
            "caffeBar/caffeBar1.jpg",

        gallery: [

            "caffeBar/caffeBar2.jpg",

            "caffeBar/caffeBar3.jpg",

            "caffeBar/caffeBar4.jpg",

            "caffeBar/caffeBar5.jpg",

            "caffeBar/caffeBar6.jpg",

            "caffeBar/caffeBar7.jpg",

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
            "studio/studio1.PNG",

        gallery: [

            "studio/studio2.jpg",

            "studio/studio3.jpg",

            "studio/studio4.jpg",

            "studio/studio5.jpg",

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
            "boutique/boutique2.jpg",

        gallery: [


            "boutique/hijabi.jpg",

            "boutique/hijabi2.jpg",

            "boutique/renderHijabi.jpg",

            "boutique/renderHijabiShop.jpg",

            "boutique/7.jpg",

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
            "house/house1.jpg",

        gallery: [

            "house/house2.jpg",

            "house/house3.jpg",

            "house/house4.jpg",

            "house/house5.jpg",

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
            "house2/house1.jpg",

        gallery: [

            "house2/house2.jpg",

            "house2/house3.jpg",

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
            "apartment/apartment2.png",

        gallery: [

            "apartment/apartment1.jpg",

            "apartment/apartment3.png",

            "apartment/apartment4.png",

            "apartment/apartment5.jpg",

            "apartment/apartment6.jpg",

            "apartment/apartment7.jpg",

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
            "beautySalon/beautySalon3.png",

        gallery: [

            "beautySalon/beautySalon2.png",

            "beautySalon/beautySalon1.png",

            "beautySalon/beautySalon4.png",

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
            "gasStation/gasStation1.jpg",

        gallery: [

            "gasStation/gasStation2.jpg",

            "gasStation/gasStation3.jpg",

            "gasStation/gasStation4.jpg",

            "gasStation/gasStation5.jpg",

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
            "interiorCofe/interiorCoffe1.jpg",

        gallery: [

            "interiorCofe/interiorCoffee2.jpg",

            "interiorCofe/interiorCoffe3.jpg",

            "interiorCofe/interiorCoffee4.jpg",

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
            "london/london1.jpg",

        gallery: [

            "london/london2.jpg",

            "london/london3.jpg",

            "london/london4.jpg",

            "london/london5.jpg",

            "london/london6.png",

            "london/london7.png",

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
            "playBoy/playBoy1.jpg",

        gallery: [

            "playBoy/playBoy2.jpg",

            "playBoy/playBoy3.jpg",

            "playBoy/playBoy4.jpg",

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
            "secondPlayBoy/secondPlayBoy1.jpg",

        gallery: [

            "secondPlayBoy/secondPlayBoy2.jpg",

            "secondPlayBoy/secondPlayBoy3.jpg",

            "secondPlayBoy/secondPlayBoy4.jpg",

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
            "secondVilla/secondVilla2.jpg",

        gallery: [

            "secondVilla/secondVilla1.jpg",

            "secondVilla/secondVilla3.jpg",

            "secondVilla/secondVilla4.jpg",

            "secondVilla/secondVilla5.jpg",

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
