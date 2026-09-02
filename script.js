document.addEventListener("DOMContentLoaded", () => {
    // Menu mobile
    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");

    if (menuButton && navigation) {
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
    }

    // Timeline
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
    if (timeline) {
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
    }

    // Mural
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
    if (mural) {
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
    }

    /* ===================================================
       LISTA DOS 23 INTEGRANTES
       Basta alterar os nomes e os cargos individuais abaixo!
       =================================================== */
    const teamData = [
        { name: "Bernardo", role: "DESENVOLVIMENTO", photo: "assets/bernardo.jpg" }, // #01
        { name: "Gustavo", role: "FRONT-END", photo: "assets/gus.jpg" },             // #02
        { name: "Mateus", role: "BACK-END", photo: "assets/mateus.jpg" },            // #03
        { name: "Rafael", role: "UX / UI", photo: "assets/rafael.jpg" },             // #04
        { name: "Vargas", role: "DATABASE", photo: "assets/vargas.jpg" },            // #05
        { name: "Haru", role: "FULL STACK", photo: "assets/haru.jpg" },              // #06
        { name: "~~Lr", role: "DESENVOLVIMENTO", photo: "assets/lr.jpg" },           // #07
        { name: "Eduardo M", role: "FRONT-END", photo: "assets/eduardo_m.jpg" },     // #08
        { name: "Nicolas G", role: "BACK-END", photo: "assets/nicolas_g.jpg" },      // #09
        { name: "Monicke", role: "UX / UI", photo: "assets/monicke.jpg" },           // #10
        { name: "Gabriel", role: "DATABASE", photo: "assets/gabriel.jpg" },          // #11
        { name: "Nicolas A", role: "FULL STACK", photo: "assets/nicolas_a.jpg" },    // #12
        { name: "Cassio", role: "DESENVOLVIMENTO", photo: "assets/cassio.jpg" },     // #13
        { name: "Isabela M", role: "FRONT-END", photo: "assets/isabela_m.jpg" },     // #14
        { name: "Leonardo M", role: "BACK-END", photo: "assets/leonardo.jpg" },      // #15
        { name: "Bruna", role: "UX / UI", photo: "assets/bruna.jpg" },               // #16
        { name: "Raul", role: "DATABASE", photo: "assets/raul.jpg" },                // #17
        { name: "Larissa", role: "FULL STACK", photo: "assets/larissa.jpg" },        // #18
        { name: "Lucas", role: "DESENVOLVIMENTO", photo: "assets/lucas.jpg" },       // #19
        { name: "Edu", role: "FRONT-END", photo: "assets/edu.jpg" },                 // #20
        { name: "Mariana", role: "BACK-END", photo: "assets/mariana.jpg" },          // #21
        { name: "Antônio", role: "UX / UI", photo: "assets/antonio.jpg" },           // #22
        { name: "Marlon", role: "FULL STACK", photo: "assets/marlon.jpg" }           // #23
    ];

    const teamGrid = document.getElementById("teamGrid");
    if (teamGrid) {
        teamData.forEach((member, index) => {
            const card = document.createElement("article");
            const number = String(index + 1).padStart(2, "0");

            card.classList.add("team-card", "reveal");

            const photo = member.photo
                ? `<img src="${member.photo}" alt="Foto de ${member.name}" loading="lazy" onerror="this.remove()">`
                : "";

            card.innerHTML = `
                <span class="team-number">#${number}</span>
                <div class="member-photo">${photo}<span>${number}</span></div>
                <div class="member-name">${member.name}</div>
                <span class="member-role">${member.role}</span>
            `;

            teamGrid.appendChild(card);
        });
    }

    // Animação ao rolar a página (reveal)
    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealElements.forEach((element) => observer.observe(element));
    } else {
        // Fallback caso o navegador antigo não suporte o observer
        revealElements.forEach((element) => element.classList.add("visible"));
    }

    // Ano atual no Footer
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});