/* =========================
   TRANSLATIONS
========================= */

const translations = {

    ru: {
        about: "Обо мне",
        projects: "Проекты",
        skills: "Навыки",
        contact: "Контакты",

        status: "Открыт для новых проектов",

        heroText:
            "Создаю современные сайты, Telegram-ботов и цифровые интерфейсы.",

        viewProjects: "Смотреть проекты ↓",

        aboutTitle: "Больше чем",
        aboutTitle2: "разработка.",

        aboutText1:
            "Привет! Я Akim Xaytaliev — Developer × Designer.",

        aboutText2:
            "Я создаю сайты, Telegram-ботов и современные цифровые интерфейсы.",

        aboutText3:
            "Мне нравится сочетать код и дизайн, чтобы создавать проекты, которые выглядят хорошо и работают быстро.",

        skillsTitle: "Мой",
        skillsTitle2: "стек.",

        projectsTitle: "Избранные",
        projectsTitle2: "проекты.",

        project1:
            "Современный веб-проект с интерактивным интерфейсом.",

        project2:
            "Интерактивный проект с визуальным интерфейсом.",

        project3:
            "Адаптивный сайт с современным дизайном.",

        project4:
            "Landing page для маркетингового проекта.",

        project5:
            "Современный адаптивный веб-интерфейс.",

        project6:
            "Адаптивный сайт с аккуратной структурой.",

        botText:
            "Telegram-бот для автоматизации и взаимодействия с пользователями.",

        designText:
            "Визуальные концепции, интерфейсы и digital-дизайн.",

        contactTitle:
            "Давай создадим",

        contactTitle2:
            "что-нибудь крутое.",

        contactText:
            "Открыт к новым проектам, идеям и сотрудничеству."
    },


    uz: {
        about: "Men haqimda",
        projects: "Loyihalar",
        skills: "Ko'nikmalar",
        contact: "Aloqa",

        status:
            "Yangi loyihalar uchun ochiqman",

        heroText:
            "Zamonaviy saytlar, Telegram botlar va raqamli interfeyslar yarataman.",

        viewProjects:
            "Loyihalarni ko'rish ↓",

        aboutTitle:
            "Dasturlashdan",

        aboutTitle2:
            "ko'proq.",

        aboutText1:
            "Salom! Men Akim Xaytaliev — Developer × Designer.",

        aboutText2:
            "Men saytlar, Telegram botlar va zamonaviy raqamli interfeyslar yarataman.",

        aboutText3:
            "Kod va dizaynni birlashtirib, chiroyli va tez ishlaydigan loyihalar yaratishni yoqtiraman.",

        skillsTitle:
            "Mening",

        skillsTitle2:
            "steckim.",

        projectsTitle:
            "Tanlangan",

        projectsTitle2:
            "loyihalar.",

        project1:
            "Interaktiv interfeysga ega zamonaviy web loyiha.",

        project2:
            "Chiroyli vizual interfeysga ega interaktiv loyiha.",

        project3:
            "Zamonaviy dizaynga ega moslashuvchan sayt.",

        project4:
            "Marketing loyihasi uchun landing page.",

        project5:
            "Zamonaviy moslashuvchan web interfeys.",

        project6:
            "Toza tuzilishga ega moslashuvchan sayt.",

        botText:
            "Foydalanuvchilar bilan ishlash va avtomatlashtirish uchun Telegram bot.",

        designText:
            "Vizual konsepsiyalar, interfeyslar va digital dizayn.",

        contactTitle:
            "Keling,",

        contactTitle2:
            "ajoyib narsa yaratamiz.",

        contactText:
            "Yangi loyihalar, g'oyalar va hamkorlik uchun ochiqman."
    },


    en: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",

        status:
            "Available for new projects",

        heroText:
            "I create modern websites, Telegram bots and digital interfaces.",

        viewProjects:
            "View projects ↓",

        aboutTitle:
            "More than",

        aboutTitle2:
            "development.",

        aboutText1:
            "Hi! I'm Akim Xaytaliev — Developer × Designer.",

        aboutText2:
            "I create websites, Telegram bots and modern digital interfaces.",

        aboutText3:
            "I enjoy combining code and design to create projects that look great and work fast.",

        skillsTitle:
            "My",

        skillsTitle2:
            "stack.",

        projectsTitle:
            "Selected",

        projectsTitle2:
            "projects.",

        project1:
            "A modern web project with an interactive interface.",

        project2:
            "An interactive project with a visual interface.",

        project3:
            "A responsive website with a modern design.",

        project4:
            "A landing page for a marketing project.",

        project5:
            "A modern responsive web interface.",

        project6:
            "A responsive website with a clean structure.",

        botText:
            "A Telegram bot for automation and user interaction.",

        designText:
            "Visual concepts, interfaces and digital design.",

        contactTitle:
            "Let's create",

        contactTitle2:
            "something amazing.",

        contactText:
            "Open to new projects, ideas and collaborations."
    }

};


/* =========================
   LANGUAGE
========================= */

const language = document.querySelector(".language");
const languageBtn = document.querySelector("#languageBtn");
const languageMenu = document.querySelector("#languageMenu");
const currentLanguage = document.querySelector("#currentLanguage");


languageBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    language.classList.toggle("active");

});


document.addEventListener("click", () => {

    language.classList.remove("active");

});


languageMenu.addEventListener("click", (event) => {

    event.stopPropagation();

});


document.querySelectorAll("[data-lang]").forEach(button => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});


function changeLanguage(lang) {

    const data = translations[lang];

    if (!data) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (data[key]) {
            element.textContent = data[key];
        }

    });

    document.documentElement.lang = lang;

    currentLanguage.textContent =
        lang.toUpperCase();

    localStorage.setItem(
        "portfolioLanguage",
        lang
    );

    language.classList.remove("active");
}


const savedLanguage =
    localStorage.getItem("portfolioLanguage");

changeLanguage(savedLanguage || "ru");


/* =========================
   TYPING EFFECT
========================= */

const typing = document.querySelector("#typing");

const roles = {

    ru: [
        "Developer × Designer",
        "Web Developer",
        "Telegram Bot Developer",
        "UI Designer"
    ],

    uz: [
        "Developer × Designer",
        "Web Developer",
        "Telegram Bot Developer",
        "UI Designer"
    ],

    en: [
        "Developer × Designer",
        "Web Developer",
        "Telegram Bot Developer",
        "UI Designer"
    ]

};

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const lang =
        localStorage.getItem("portfolioLanguage") || "ru";

    const currentRoles =
        roles[lang];

    const currentRole =
        currentRoles[roleIndex];

    if (!deleting) {

        typing.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typing.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= currentRoles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}


typeEffect();


/* =========================
   PROJECT FILTER
========================= */

const filters =
    document.querySelectorAll(".filter");

const cards =
    document.querySelectorAll(".project-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.dataset.filter;

        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================
   MOUSE GLOW
========================= */

const glow1 =
    document.querySelector(".glow-1");

const glow2 =
    document.querySelector(".glow-2");


document.addEventListener("mousemove", event => {

    const x = event.clientX;
    const y = event.clientY;

    glow1.style.transform =
        `translate(${x * 0.025}px, ${y * 0.025}px)`;

    glow2.style.transform =
        `translate(${x * -0.015}px, ${y * -0.015}px)`;

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});/* =========================
   TRANSLATIONS
========================= */

const translations = {

    ru: {

        about: "Обо мне",
        projects: "Проекты",
        skills: "Навыки",
        contact: "Контакты",

        status:
            "Открыт для новых проектов",

        heroText:
            "Создаю современные сайты, Telegram-ботов и цифровые интерфейсы.",

        viewProjects:
            "Смотреть проекты ↓",


        aboutTitle:
            "Обо",

        aboutTitle2:
            "мне.",


        aboutText1:
            "Привет! Я Akim Xaytaliev — Web Developer.",

        aboutText2:
            "Я занимаюсь разработкой современных, адаптивных и интерактивных веб-сайтов.",

        aboutText3:
            "Работаю с HTML, CSS, JavaScript, React, PHP, Python и Tailwind CSS.",

        aboutText4:
            "Также создаю Telegram-ботов и занимаюсь UI-дизайном. Мне нравится превращать идеи в реальные работающие проекты.",


        skillsTitle:
            "Мой",

        skillsTitle2:
            "стек.",


        projectsTitle:
            "Избранные",

        projectsTitle2:
            "проекты.",


        project1:
            "Современный веб-проект с интерактивным интерфейсом.",

        project2:
            "Интерактивный проект с визуальным интерфейсом.",

        project3:
            "Адаптивный сайт с современным дизайном.",

        project4:
            "Landing page для маркетингового проекта.",

        project5:
            "Современный адаптивный веб-интерфейс.",

        project6:
            "Адаптивный сайт с аккуратной структурой.",

        botText:
            "Telegram-бот для автоматизации и взаимодействия с пользователями.",

        designText:
            "Визуальные концепции, интерфейсы и digital-дизайн.",


        contactTitle:
            "Давай создадим",

        contactTitle2:
            "что-нибудь крутое.",

        contactText:
            "Открыт к новым проектам, идеям и сотрудничеству."

    },


    uz: {

        about: "Men haqimda",
        projects: "Loyihalar",
        skills: "Ko'nikmalar",
        contact: "Aloqa",

        status:
            "Yangi loyihalar uchun ochiqman",

        heroText:
            "Zamonaviy saytlar, Telegram botlar va raqamli interfeyslar yarataman.",

        viewProjects:
            "Loyihalarni ko'rish ↓",


        aboutTitle:
            "Men",

        aboutTitle2:
            "haqimda.",


        aboutText1:
            "Salom! Men Akim Xaytaliev — Web Developer.",

        aboutText2:
            "Men zamonaviy, moslashuvchan va interaktiv veb-saytlar yarataman.",

        aboutText3:
            "HTML, CSS, JavaScript, React, PHP, Python va Tailwind CSS bilan ishlayman.",

        aboutText4:
            "Shuningdek, Telegram botlar yarataman va UI dizayn bilan shug'ullanaman. G'oyalarni haqiqiy ishlaydigan loyihalarga aylantirishni yoqtiraman.",


        skillsTitle:
            "Mening",

        skillsTitle2:
            "steckim.",


        projectsTitle:
            "Tanlangan",

        projectsTitle2:
            "loyihalar.",


        project1:
            "Interaktiv interfeysga ega zamonaviy web loyiha.",

        project2:
            "Chiroyli vizual interfeysga ega interaktiv loyiha.",

        project3:
            "Zamonaviy dizaynga ega moslashuvchan sayt.",

        project4:
            "Marketing loyihasi uchun landing page.",

        project5:
            "Zamonaviy moslashuvchan web interfeys.",

        project6:
            "Toza tuzilishga ega moslashuvchan sayt.",

        botText:
            "Foydalanuvchilar bilan ishlash va avtomatlashtirish uchun Telegram bot.",

        designText:
            "Vizual konsepsiyalar, interfeyslar va digital dizayn.",


        contactTitle:
            "Keling,",

        contactTitle2:
            "ajoyib narsa yaratamiz.",

        contactText:
            "Yangi loyihalar, g'oyalar va hamkorlik uchun ochiqman."

    },


    en: {

        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",

        status:
            "Available for new projects",

        heroText:
            "I create modern websites, Telegram bots and digital interfaces.",

        viewProjects:
            "View projects ↓",


        aboutTitle:
            "About",

        aboutTitle2:
            "me.",


        aboutText1:
            "Hi! I'm Akim Xaytaliev — Web Developer.",

        aboutText2:
            "I build modern, responsive and interactive websites.",

        aboutText3:
            "I work with HTML, CSS, JavaScript, React, PHP, Python and Tailwind CSS.",

        aboutText4:
            "I also create Telegram bots and work with UI design. I enjoy turning ideas into real working projects.",


        skillsTitle:
            "My",

        skillsTitle2:
            "stack.",


        projectsTitle:
            "Selected",

        projectsTitle2:
            "projects.",


        project1:
            "A modern web project with an interactive interface.",

        project2:
            "An interactive project with a visual interface.",

        project3:
            "A responsive website with a modern design.",

        project4:
            "A landing page for a marketing project.",

        project5:
            "A modern responsive web interface.",

        project6:
            "A responsive website with a clean structure.",

        botText:
            "A Telegram bot for automation and user interaction.",

        designText:
            "Visual concepts, interfaces and digital design.",


        contactTitle:
            "Let's create",

        contactTitle2:
            "something amazing.",

        contactText:
            "Open to new projects, ideas and collaborations."

    }

};


/* =========================
   LANGUAGE MENU
========================= */

const language =
    document.querySelector(".language");

const languageBtn =
    document.querySelector("#languageBtn");

const languageMenu =
    document.querySelector("#languageMenu");

const currentLanguage =
    document.querySelector("#currentLanguage");


languageBtn.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        language.classList.toggle("active");

    }
);


document.addEventListener(
    "click",
    () => {

        language.classList.remove("active");

    }
);


languageMenu.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

    }
);


document
    .querySelectorAll("[data-lang]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                changeLanguage(
                    button.dataset.lang
                );

            }
        );

    });


function changeLanguage(lang) {

    const data =
        translations[lang];

    if (!data) return;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (data[key]) {

                element.textContent =
                    data[key];

            }

        });


    document.documentElement.lang =
        lang;


    currentLanguage.textContent =
        lang.toUpperCase();


    localStorage.setItem(
        "portfolioLanguage",
        lang
    );


    language.classList.remove(
        "active"
    );

}


const savedLanguage =
    localStorage.getItem(
        "portfolioLanguage"
    );


changeLanguage(
    savedLanguage || "ru"
);


/* =========================
   PROJECT FILTER
========================= */

const filters =
    document.querySelectorAll(
        ".filter"
    );

const cards =
    document.querySelectorAll(
        ".project-card"
    );


filters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {

            filters.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            filter.classList.add(
                "active"
            );


            const category =
                filter.dataset.filter;


            cards.forEach(card => {

                if (
                    category === "all" ||
                    card.dataset.category === category
                ) {

                    card.classList.remove(
                        "hide"
                    );

                } else {

                    card.classList.add(
                        "hide"
                    );

                }

            });

        }
    );

});


/* =========================
   MOUSE GLOW
========================= */

const glow1 =
    document.querySelector(
        ".glow-1"
    );

const glow2 =
    document.querySelector(
        ".glow-2"
    );


document.addEventListener(
    "mousemove",
    event => {

        const x =
            event.clientX;

        const y =
            event.clientY;


        glow1.style.transform =
            `translate(${x * 0.025}px, ${y * 0.025}px)`;


        glow2.style.transform =
            `translate(${x * -0.015}px, ${y * -0.015}px)`;

    }
);


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });