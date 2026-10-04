/* ========================================
   INITIALIZE ICONS
======================================== */

lucide.createIcons();


/* ========================================
   MOBILE MENU
======================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon = navLinks.classList.contains("open")
            ? "x"
            : "menu";

        menuToggle.innerHTML =
            `<i data-lucide="${icon}"></i>`;

        lucide.createIcons();

    });

}


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.innerHTML =
            `<i data-lucide="menu"></i>`;

        lucide.createIcons();

    });

});


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

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


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ========================================
   SKILL PROGRESS ANIMATION
======================================== */

const progressBars =
    document.querySelectorAll(".progress span");

const skillObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const bar = entry.target;

                    const width =
                        bar.getAttribute("data-width");

                    setTimeout(() => {

                        bar.style.width = width;

                    }, 200);

                    observer.unobserve(bar);

                }

            });

        },
        {
            threshold: 0.4
        }
    );


progressBars.forEach(bar => {
    skillObserver.observe(bar);
});


/* ========================================
   CURSOR GLOW
======================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}


/* ========================================
   MAGNETIC BUTTONS
======================================== */

const magneticElements =
    document.querySelectorAll(".magnetic");

magneticElements.forEach(element => {

    element.addEventListener("mousemove", event => {

        const rect =
            element.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        element.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    element.addEventListener("mouseleave", () => {

        element.style.transform =
            "translate(0, 0)";

    });

});


/* ========================================
   ACTIVE NAVIGATION
======================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ========================================
   PARALLAX HERO ORB
======================================== */

const heroVisual =
    document.querySelector(".hero-visual");

if (heroVisual) {

    document.addEventListener("mousemove", event => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 80;

        const y =
            (window.innerHeight / 2 - event.clientY) / 80;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* ========================================
   CARD TILT EFFECT
======================================== */

const cards =
    document.querySelectorAll(
        ".service-card, .project-card"
    );

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -5;

        const rotateY =
            ((x / rect.width) - 0.5) * 5;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "";

    });

});


/* ========================================
   SMOOTH ANCHOR SCROLL
======================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) return;

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ========================================
   NUMBER COUNTER
======================================== */

const counters =
    document.querySelectorAll(".hero-meta strong");

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const element =
                    entry.target;

                const finalValue =
                    parseInt(
                        element.textContent
                    );

                let current = 0;

                const duration = 1200;

                const start =
                    performance.now();

                function update(time) {

                    const progress =
                        Math.min(
                            (time - start) / duration,
                            1
                        );

                    current =
                        Math.floor(
                            progress * finalValue
                        );

                    element.textContent =
                        `${current}+`;

                    if (progress < 1) {

                        requestAnimationFrame(update);

                    } else {

                        element.textContent =
                            `${finalValue}+`;

                    }

                }

                requestAnimationFrame(update);

                counterObserver.unobserve(element);

            });

        },
        {
            threshold: 0.7
        }
    );


counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* ========================================
   PROJECT HOVER GLOW
======================================== */

document.querySelectorAll(
    ".project-card"
).forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(124,92,255,0.09),
                rgba(255,255,255,0.025) 45%
            )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,0.025)";

    });

});


/* ========================================
   CONSOLE EASTER EGG
======================================== */

console.log(`
╔══════════════════════════════════════╗
║                                      ║
║       MOHAMED KAMEL PORTFOLIO        ║
║                                      ║
║   Software Engineer · Full Stack     ║
║   AI · System Design · Technology    ║
║                                      ║
╚══════════════════════════════════════╝
`);

console.log(
    "Hey developer 👋 Looking under the hood?"
);