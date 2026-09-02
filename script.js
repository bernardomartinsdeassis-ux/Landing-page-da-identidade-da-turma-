const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".navigation a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

const timelineData = [
    {
        date: "CHALLENGE 01",
        type: "BANCO DE DADOS",
        title: "Lorem ipsum",
        description: "Lorem ipsum"
    },
    {
        date: "CHALLENGE 02",
        type: "BACK-END",
        title: "Lorem ipsum",
        description: "Lorem ipsum."
    },
    {
        date: "CHALLENGE 03",
        type: "FRONT-END",
        title: "Lorem ipsum",
        description: "Lorem ipsum"
    },
    {
        date: "CHALLENGE 04",
        type: "LANDING PAGE",
        title: "Lorem Ipsum",
        description: "Lorem ipsum"
    }
];

const timeline = document.getElementById("timeline");

timelineData.forEach((item) => {
    const element = document.createElement("article");

    element.classList.add("timeline-item", "reveal");

    element.innerHTML = `
        <div class="timeline-node">
            <span class="timeline-dot"></span>
            <span class="timeline-date">${item.date}</span>
        </div>

        <div class="timeline-card">
            <span class="timeline-type">${item.type}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;

    timeline.appendChild(element);
});

const muralData = [
    "Aprender algo novo todos os dias.",
    "Errar também faz parte do processo.",
    "Código melhor é código compartilhado.",
    "Cada desafio traz uma nova oportunidade.",
    "Programar é transformar ideias em soluções.",
    "Ninguém evolui sozinho.",
    "Persistência antes da perfeição.",
    "Conhecimento se constrói em equipe."
];

const mural = document.getElementById("muralGrid");

muralData.forEach((phrase, index) => {
    const note = document.createElement("article");
    const rotation = [-2, 1, -1, 2][index % 4];

    note.classList.add("note", "reveal");
    note.style.setProperty("--rotation", `${rotation}deg`);

    note.innerHTML = `
        <div class="quote">"${phrase}"</div>
        <div class="author">— integrante da turma</div>
    `;

    mural.appendChild(note);
});

const teamData = [
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante",
    "Nome do integrante"
];

const roles = [
    "DESENVOLVIMENTO",
    "FRONT-END",
    "BACK-END",
    "UX / UI",
    "DATABASE",
    "FULL STACK"
];

const teamGrid = document.getElementById("teamGrid");

teamData.forEach((name, index) => {
    const card = document.createElement("article");
    const number = String(index + 1).padStart(2, "0");
    const role = roles[index % roles.length];

    card.classList.add("team-card", "reveal");

    card.innerHTML = `
        <span class="team-number">#${number}</span>
        <div class="member-photo">${number}</div>
        <div class="member-name">${name}</div>
        <span class="member-role">${role}</span>
    `;

    teamGrid.appendChild(card);
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();
